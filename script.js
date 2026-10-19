// Project entries. Edit this array to add, remove, or reorder projects.
// image: path under images/ (optional). links: [{ label, url }] (optional).
const PROJECTS = [
  {
    title: "TOW3 Teleop Device",
    year: "2026",
    meta: "ROBROS",
    summary: "Designed the circuits, firmware, and software for ROBROS’s wearable teleoperation device for the IGRIS-C humanoid. Operator arm and torso motion is read on the device and streamed to the robot over Cyclone DDS, with an on-device status display and a web dashboard for monitoring and setup.",
    tags: ["Teleoperation", "Humanoid", "PCB Design", "Firmware", "DDS"],
    image: "images/tow3.webp",
    details: [
      { heading: "Overview", text: "A wearable device for teleoperating humanoid robots, made up of a backpack control unit (I/O ports, Wi-Fi, OLED display, and an IMU for upper-body posture), two arm modules, and handheld end-effectors.\n\nOperator shoulder, elbow, and wrist motion maps onto the matching robot joints (14 DOF), torso lean drives the robot's waist, and joysticks on the end-effectors drive walking and turning.\n\nResponsible for the circuit design, firmware, and software." },
      { heading: "1. Circuit Design", text: "Designed two STM32-based boards: a Raspberry Pi HAT that works as a co-processor, with the servo bus interface and an onboard 6-axis IMU, and a hand-controller PCB with a 2-axis joystick, buttons, and a 3D Hall-effect sensor for the analog trigger." },
      { heading: "2. Firmware", text: "HAT: masters the DYNAMIXEL servo bus, reading all 14 arm joints and both hand controllers every cycle with fast sync reads and a per-device fallback. Runs a Madgwick AHRS on the IMU for torso orientation, and streams everything to the Pi over a high-speed UART link with COBS framing and CRC checks, taking commands such as controller LED states in return.\n\nHand controller: presents itself as a DYNAMIXEL Protocol 2.0 device, so one bus and one instruction set read servos and controllers alike. Includes a bootloader for firmware updates over the bus." },
      { heading: "3. Device Software", text: "Built the device software on a Raspberry Pi in C++17 as independent processes that share data through lock-free shared-memory ring buffers. A single bridge process maps the readings to robot joint commands and streams them to IGRIS-C over Cyclone DDS.\n\nStreaming runs through a state machine (not initialized → ready → publishing). On engage it checks that the robot's state is fresh, then ramps each joint from the robot's current pose toward the operator's pose under a velocity limit, so the robot never jumps to a mismatched pose." },
      { heading: "4. Control Algorithms", text: "Waist: a re-center button captures the operator's reference torso orientation. The relative orientation from the IMU is decomposed into yaw, roll, and pitch for the robot's waist, and implausible poses are rejected in favor of the last valid one.\n\nParallel linkages: the robot's wrists and waist use parallel four-bar linkages, so joint angles are converted to actual motor angles with four-bar inverse kinematics on the robot model (RBDL). The dashboard shows both joint space and motor space.\n\nTeleop inputs: joysticks map to walking velocity commands with per-axis deadzone and scaling, and the analog triggers give proportional hand grip.\n\nButton logic: non-reserved buttons run user-defined node graphs (trigger, condition, action, delay, sequence) edited in the dashboard. A loader validates each graph (single trigger, all nodes reachable, no cycles, known actions only) before it runs, and safety-critical controls stay hard-wired." },
      { heading: "5. Status Display & Web Dashboard", text: "Built the OLED status screens showing domain ID, namespace, control rate, system state, and hardware telemetry.\n\nBuilt a web dashboard (React, TypeScript, three.js) with a C++ backend: a live 3D view of the robot, real-time joint and IMU plots, hardware error logs, and network and DDS settings." },
      { heading: "6. Networking & Deployment", text: "Supported access-point, Wi-Fi, and Ethernet modes so the device can connect to the robot with or without existing network infrastructure.\n\nPackaged the full system into a single installer for the device, built with Docker and a Jenkins pipeline." }
    ],
    links: [{ label: "Teleop Device documentation (ROBROS Developer Center)", url: "https://www.robros.co.kr/en/developers/v2.1.1/a62aa64d-94a0-4018-bffe-b1227d67668d/Teleop_Device" }]
  },
  {
    title: "IGRIS-B",
    year: "2025",
    meta: "ROBROS",
    summary: "Developed software/hardware and imitation learning pipelines for ROBROS’s IGRIS-B humanoid robot, enabling it to learn and execute manipulation tasks from human demonstrations for practical real-world automation.",
    tags: ["AI", "Humanoid", "ACT"],
    image: "images/igris-b_overview.webp",
    details: [
      { heading: "1. Hardware — Master Arm Design", text: "Designed and developed a master-arm teleoperation interface for intuitive, human-guided control of the IGRIS-B humanoid robot. Focused on hardware design and integration to enable reliable motion input and demonstration collection." },
      { heading: "2. Software — Teleoperation & Robotics Systems", text: "Developed the software pipeline spanning teleoperation, demonstration data collection and validation, robot control, and image processing. Integrated hardware interfaces, synchronized multimodal observations and actions, and established a consistent workflow for collecting high-quality training datasets." },
      { heading: "3. AI — Imitation Learning & Policy Deployment", text: "Implemented imitation learning workflows using Action Chunking with Transformers (ACT) and Diffusion Policy. Developed training and inference systems for action chunking, enabling policies to learn manipulation behaviors from demonstrations and execute predicted action sequences on the robot." }
    ],
    links: [{ label: "IGRIS-B Pick&Place", url: "https://youtu.be/zl-14tAw5Wo?si=NYQGjh-2LdJIbB43" }]
  },
  {
    title: "RoboCup Rescue 2024 [KULS]",
    year: "2024",
    meta: "RO:BIT",
    summary: "Developed robot bringup and user interface software, encapsulated system components for streamlined deployment, and implemented a panoramic imaging package that combines 360-degree camera feeds into a single panorama. Achieved 9th place overall at RoboCup Rescue 2024.",
    tags: ["RoboCup Rescue", "Image Projection"],
    image: "images/kuls.webp",
    details: [
      { heading: "1. Robot Bringup & System Integration", text: "Developed a comprehensive bringup package to initialize and configure robot subsystems.\n\nOrganized startup procedures and software dependencies into a unified workflow.\n\nEncapsulated source code and system components to improve modularity, maintainability, and deployment." },
      { heading: "2. User GUI & Software Architecture", text: "Developed user-facing GUI components for robot operation and system interaction.\n\nStructured software modules behind clear interfaces to simplify integration and usage.\n\nImproved usability by consolidating robot initialization and operational workflows." },
      { heading: "3. 360° Camera & Panoramic Imaging", text: "Developed a software package to transform 360-degree camera imagery into a single panoramic image.\n\nImplemented image processing and stitching workflows to provide a unified view of the robot's surroundings.\n\nSupported situational awareness for remote robot operation in search-and-rescue environments." },
      { heading: "Competition Results", text: "Overall: 9th Place — RoboCup Rescue 2024" }
    ],
    links: [{ label: "2024 RO:BIT South Korea Qualification Video Maneuvering", url: "https://www.youtube.com/watch?v=uMBvXKlOzwg&t=31s" }, { label: "2024 RO:BIT South Korea Qualification Video Mobility", url: "https://www.youtube.com/watch?v=M52AtqbsPnA" }]
  },
  {
    title: "RoboCup Rescue 2023 [KUBO]",
    year: "2023",
    meta: "RO:BIT",
    summary: "Developed communication, localization, and autonomous flipper control systems for a search-and-rescue robot competing in RoboCup Rescue 2023. Achieved 7th place in Mobility, 4th place in Dexterity, and 6th place overall.",
    tags: ["RoboCup Rescue", "SLAM", "Controller"],
    image: "images/kubo.webp",
    details: [
      { heading: "1. UDP Communication", text: "Implemented UDP-based communication between the robot and external control systems.\n\nDeveloped data transmission and reception logic for robot commands and status monitoring.\n\nSupported real-time communication for remote operation and system integration." },
      { heading: "2. Localization & 3D Mapping", text: "Developed a localization system using IMU measurements and wheel odometry.\n\nIntegrated inertial and odometry data to estimate the robot's position and orientation.\n\nSupported robot pose estimation for 3D mapping and navigation in unstructured environments." },
      { heading: "3. Autonomous Flipper Control", text: "Developed an autonomous flipper angle control algorithm for traversing rough terrain and obstacles.\n\nApplied RANSAC-based processing to point cloud data to estimate terrain geometry.\n\nUsed estimated terrain characteristics to determine flipper angles and improve obstacle traversal capability." },
      { heading: "Competition Results", text: "Mobility: 7th Place\n\nDexterity: 4th Place\n\nOverall: 6th Place" }
    ],
    links: [{ label: "2023 한국지능로봇경진대회(Korea Intelligent Robot Contest) 국방부문 ROBIT 로봇소개", url: "https://www.youtube.com/watch?v=HWD70mjFWxY" }]
  },
  {
    title: "Baemin Robot Delivery Challenge",
    year: "2024",
    meta: "RO:BIT",
    summary: "Developed SLAM and autonomous navigation algorithms for a mobile robot tasked with safely delivering packages to designated destinations. Integrated three 2D LiDAR sensors to improve environmental perception and enable reliable autonomous navigation.",
    tags: ["SLAM", "Autonomous Navigation"],
    image: "images/baemin.webp",
    details: [
      { heading: "1. SLAM & Environment Mapping", text: "Developed and configured SLAM for mapping and localization in indoor environments.\n\nIntegrated 2D LiDAR sensor data to support environmental perception and map generation.\n\nTuned mapping and localization performance for autonomous delivery tasks." },
      { heading: "2. Autonomous Navigation & Obstacle Avoidance", text: "Developed navigation algorithms to guide the robot safely to designated delivery destinations.\n\nIntegrated three 2D LiDAR sensors mounted on the mobile robot for multi-directional obstacle detection.\n\nUsed LiDAR-based environmental perception to support collision avoidance and reliable path execution." },
      { heading: "3. Mobile Robot System Integration", text: "Integrated LiDAR sensors, SLAM, and navigation into an autonomous delivery pipeline.\n\nConfigured the robot to navigate indoor environments and complete point-to-point delivery missions.\n\nFocused on safe and reliable operation in environments with obstacles." }
    ],
    links: []
  },
  {
    title: "DroneBot Challenge",
    year: "2024",
    meta: "RO:BIT",
    summary: "Improved the UDP communication algorithm so the mobile base could be operated at distances of more than 500 m, and wrote code to mark object positions in 3D data. Won 2nd place (국방참모총장상) in the indoor building reconnaissance category.",
    tags: ["UDP", "Long-range Communication", "3D Perception"],
    image: "images/dronebot.jpg",
    details: [
      { heading: "1. Long-Range Communication", text: "Improved the UDP communication algorithm so the mobile base could be driven at distances of more than 500 m." },
      { heading: "2. Object Position Marking", text: "Wrote code to mark the positions of objects within 3D data." },
      { heading: "Awards", text: "2nd Place (국방참모총장상) — Indoor Building Reconnaissance category" }
    ],
    links: []
  },
  {
    title: "Defense Robotics Competition",
    year: "2023",
    meta: "RO:BIT",
    summary: "Improved the robot operator interface and prepared object detection datasets for a defense robotics competition. Received 3rd place — Hanwha Defense Robotics Award.",
    tags: ["Defense Robotics"],
    image: "images/defense.webp",
    details: [
      { heading: "1. Object Detection Dataset Preparation", text: "Captured images and videos of target objects for object detection missions.\n\nProcessed and organized visual data for use in deep learning model training and evaluation.\n\nPrepared object-specific datasets to support detection performance in competition environments." },
      { heading: "2. User Interface & Robot Operation", text: "Developed and improved the user interface for robot operation during competition missions.\n\nImplemented mission progress indicators to display task completion status for judges and operators.\n\nIntegrated robot control functions and mission status visualization into a unified interface." },
      { heading: "3. Competition System Integration", text: "Supported the integration of operator controls and mission monitoring workflows.\n\nImproved operational clarity and evaluation usability by making robot status and mission progress visible." },
      { heading: "Awards", text: "3rd Place — Hanwha Defense Robotics Award" }
    ],
    links: []
  },
  {
    title: "Turtlebot3",
    year: "2023",
    meta: "RO:BIT",
    summary: "Developed and optimized SLAM and autonomous navigation algorithms for the TurtleBot3 AutoRace competition. Improved navigation speed and accuracy by incorporating Voronoi-based path planning techniques, achieving 1st place and the Prime Minister’s Award.",
    tags: ["Robotics", "ROS", "TurtleBot3", "SLAM"],
    image: "images/tb3.webp",
    details: [
      { heading: "1. SLAM & Environment Mapping", text: "Developed and tuned SLAM algorithms for real-time environment mapping and robot localization.\n\nImproved mapping and localization performance to support reliable autonomous navigation.\n\nIntegrated mapping outputs with the navigation pipeline." },
      { heading: "2. Autonomous Navigation & Path Planning", text: "Optimized existing navigation algorithms to improve speed and path-following accuracy.\n\nApplied Voronoi-based planning techniques to generate paths that account for environmental geometry and obstacle clearance.\n\nTuned navigation behavior to improve autonomous driving performance in the competition environment." },
      { heading: "3. Algorithm Optimization & System Integration", text: "Evaluated and refined navigation performance through iterative testing.\n\nIntegrated SLAM and path planning into the TurtleBot3 autonomous driving system.\n\nBalanced navigation speed and accuracy to improve overall race performance." }
    ],
    links: [{ label: "DWA local planner with custom escape method", url: "https://youtu.be/4PapKKC_KMs" }]
  },
  {
    title: "image_recognition",
    year: "2024",
    meta: "Personal",
    summary: "Built a stack of ROS2 image perception and recognition packages focused on modularity, lifecycle management, and real-time control of image streams. Covers camera input, image/video publishing, and YOLO-based detection and segmentation.",
    tags: ["ROS2", "OpenCV", "YOLO"],
    image: "images/image-recognition.jpg",
    details: [
      { heading: "1. Camera & Stream Nodes", text: "Developed V4L2 USB camera and pan-tilt camera nodes with lifecycle management, along with nodes that publish static image and video files to ROS2 topics with configurable parameters." },
      { heading: "2. Detection & Segmentation", text: "Implemented real-time YOLO object detection and segmentation nodes with GPU support and dynamic parameter configuration." },
      { heading: "3. Package Structure", text: "Organized the project into projection, perception, and recognition packages with custom message definitions. Built and tested on ROS2 Foxy and Humble with OpenCV 4.2+." }
    ],
    links: [{ label: "Source on GitHub", url: "https://github.com/mjlee111/image_recognition" }]
  },
  {
    title: "ESP32 Wi-Fi Security Tool",
    year: "2024",
    meta: "Personal",
    summary: "Designed and built an ESP32-based Wi-Fi security testing tool for education and authorized network testing, with custom firmware, a 0.96\" OLED status display, and a custom PCB.",
    tags: ["ESP32", "Firmware", "PCB Design"],
    image: "images/esp32-wifi.jpg",
    details: [
      { heading: "1. Firmware", text: "Wrote custom ESP32 firmware for Wi-Fi network scanning and deauthentication testing, with status shown on a 0.96-inch SSD1306 OLED display and tactile-button control." },
      { heading: "2. Hardware", text: "Designed a custom PCB (V3.0) around an ESP32-C3 Super-Mini, with schematic and Gerber files published alongside the firmware." },
      { heading: "Note", text: "Built as an embedded and network-security learning project. Intended only for education and for testing on networks you own or are authorized to test." }
    ],
    links: [{ label: "Source on GitHub", url: "https://github.com/mjlee111/esp32_wifi_deauther" }]
  },
  {
    title: "Web-ROS GUI",
    year: "2024",
    meta: "Personal",
    summary: "Built a web-based ROS package that lets users access data from and control ROS-based robots through an HTML interface, without having to set up a Linux environment.",
    tags: ["ROS", "Web", "GUI"],
    image: "images/web-ros-gui.jpg",
    details: [
      { heading: "Role", text: "Web development." },
      { heading: "Motivation", text: "Operating a ROS-based robot required setting up a Linux environment, which was inconvenient." },
      { heading: "Overview", text: "Used HTML to connect to ROS-based robots, load their data, and control them from a web interface." }
    ],
    links: []
  },
  {
    title: "Parcel Delivery Robot",
    year: "2023",
    meta: "Personal",
    summary: "Built a robot that automatically delivers packages within an apartment complex, with a barcode-based algorithm for estimating distance to a parcel and a lane-following algorithm for driving inside the complex.",
    tags: ["Autonomous Driving", "Computer Vision"],
    image: "images/parcel-delivery.jpg",
    details: [
      { heading: "Role", text: "Driving algorithm and barcode recognition algorithm." },
      { heading: "1. Barcode-Based Distance Estimation", text: "Recognized the tracking-number barcode on a parcel and estimated the distance to the parcel from it." },
      { heading: "2. Lane Following", text: "Developed a lane-following algorithm for driving within the apartment complex." }
    ],
    links: []
  },
  {
    title: "Hazmat Label Recognition",
    year: "2023",
    meta: "Personal",
    summary: "Built a deep learning model to classify Hazmat labels, which identify hazardous materials.",
    tags: ["Deep Learning", "Computer Vision"],
    image: "images/hazmat.jpg",
    details: [
      { heading: "Role", text: "Deep learning model development." }
    ],
    links: []
  },
  {
    title: "3D LiDAR Mapping with LOAM",
    year: "2023",
    meta: "Personal",
    summary: "Developed a 3D point cloud mapping system by rotating a 2D LiDAR through 360 degrees using a motor and slip ring. Applied LOAM (Lidar Odometry and Mapping) to process the resulting point cloud data and perform 3D scan matching and mapping.",
    tags: [],
    image: "images/loam.webp",
    details: [
      { heading: "1. 2D-to-3D LiDAR Hardware System", text: "Designed a rotating LiDAR assembly using a motor and slip ring to enable continuous 360-degree scanning.\n\nCaptured spatial measurements across multiple rotation angles to reconstruct 3D environmental point clouds.\n\nIntegrated the rotating mechanism with the LiDAR data acquisition pipeline." },
      { heading: "2. LOAM-Based Point Cloud Processing", text: "Applied the LOAM algorithm to process 3D point cloud data generated from 2D LiDAR scans.\n\nDeveloped and integrated scan-matching algorithms to estimate sensor motion and align successive point clouds.\n\nCombined LiDAR odometry and mapping to reconstruct the surrounding environment in 3D." },
      { heading: "3. 3D Mapping & System Integration", text: "Connected rotating LiDAR data acquisition with point cloud processing and mapping.\n\nInvestigated the use of low-cost 2D LiDAR hardware as an alternative to dedicated 3D LiDAR sensors.\n\nBuilt an end-to-end pipeline from mechanical scanning to 3D environmental reconstruction." }
    ],
    links: [{ label: "2D lidar LOAM", url: "https://youtu.be/pvgVrj6DGlQ" }, { label: "LOAM_2D", url: "https://github.com/mjlee111/LOAM_2D" }]
  },
  {
    title: "Image-Based Logistics Sorting Robot",
    year: "2022",
    meta: " Personal / Team Project",
    summary: "Developed an automated logistics sorting robot using OpenCV-based object localization and a belt-driven Cartesian robot with two stepper-motor axes. Received 4th place at Kwangwoon University’s 2022 Fall ChamBit Design Semester Exhibition.",
    tags: ["Computer Vision", "Embedded"],
    image: "images/chbs.webp",
    details: [
      { heading: "1. Object Detection & Localization", text: "Implemented image processing with OpenCV to detect and localize different types of logistics items.\n\nExtracted object positions from camera images to determine sorting targets.\n\nUsed visual coordinates to guide the robot toward designated sorting locations." },
      { heading: "2. Cartesian Robot Design & Motion Control", text: "Designed and built a two-axis Cartesian robot using stepper motors and a pulley-belt transmission system.\n\nImplemented axis motion control to position the robot at target coordinates.\n\nIntegrated the mechanical structure and control electronics for repeatable positioning." },
      { heading: "3. Circuit Design & System Integration", text: "Built the control circuitry required to operate the robot’s motion system.\n\nIntegrated image-based object localization with motor control for automated sorting.\n\nDeveloped an end-to-end workflow from object detection to placement at designated locations." },
      { heading: "Awards", text: "4th Place — Kwangwoon University ChamBit Design Semester Exhibition, Fall 2022" }
    ],
    links: []
  },
  {
    title: "Caterpion",
    year: "2022",
    meta: "Personal",
    summary: "Designed a mobile manipulator for human detection and rescue in structured environments, combining YOLO-based object detection with sensor-driven autonomous navigation. Won 1st place at Kwangwoon University’s FEDEC Engineering Design Exhibition",
    tags: ["Embedded", "Mobile robot"],
    image: "images/caterpion.webp",
    details: [
      { heading: "1. Object Detection & Distance Estimation", text: "Implemented YOLO-based human/object detection using camera images.\n\nExtracted image-space object coordinates and estimated real-world distance to detected targets.\n\nConnected visual perception outputs to the robot’s target identification and approach behavior." },
      { heading: "2. Autonomous Navigation", text: "Developed a maze-solving navigation algorithm using two PSD distance sensors.\n\nProcessed sensor measurements to detect nearby obstacles and determine movement decisions.\n\nImplemented autonomous navigation logic to traverse and escape a maze." },
      { heading: "3. Mobile Manipulator System Integration", text: "Designed a simple mobile manipulator architecture for human search and rescue.\n\nIntegrated camera-based perception with sensor-based navigation to support target detection and autonomous movement." },
      { heading: "Awards", text: "1st Place — Kwangwoon University FEDEC (Engineering Design Exhibition)" }
    ],
    links: [{ label: "Demo", url: "https://youtu.be/YCJDbqGSQCM" }]
  }
];

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[c]));

const list = document.getElementById("project-list");
const dialog = document.getElementById("project-dialog");
const content = document.getElementById("dlg-content");

// Buttons allow phrasing content only, so the card is built from spans.
// Accessible name is the title; the summary is the description.
function renderList() {
  list.innerHTML = PROJECTS.map((p, i) => `
    <button class="project" type="button" data-index="${i}" aria-haspopup="dialog" aria-labelledby="project-${i}-title" aria-describedby="project-${i}-summary">
      <span class="project-thumb">${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : ""}</span>
      <span class="project-body">
        <span class="project-top"><span class="meta">${esc(p.meta)}</span><span class="year">${esc(p.year)}</span></span>
        <span class="project-title" id="project-${i}-title">${esc(p.title)}</span>
        <span class="summary" id="project-${i}-summary">${esc(p.summary)}</span>
        ${p.tags?.length ? `<span class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</span>` : ""}
      </span>
    </button>`).join("");
}

// Blank lines in detail text separate paragraphs; single newlines become line breaks.
const paragraphs = (text) => String(text).split(/\n\s*\n/)
  .map((s) => `<p>${esc(s.trim()).replace(/\n/g, "<br>")}</p>`).join("");

function openProject(i) {
  const p = PROJECTS[i];
  content.innerHTML = `
    <h2 id="dlg-title">${esc(p.title)}</h2>
    <p class="meta">${esc(p.year)}, ${esc(p.meta)}</p>
    ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}">` : ""}
    ${(p.details || []).map((d) => `<h3>${esc(d.heading)}</h3>${paragraphs(d.text)}`).join("")}
    ${p.links?.length ? `<h3>Links</h3><p>${p.links.map((l) =>
      `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("<br>")}</p>` : ""}`;
  dialog.showModal();
}

list.addEventListener("click", (e) => {
  const btn = e.target.closest(".project");
  if (btn) openProject(Number(btn.dataset.index));
});
dialog.querySelector(".dlg-close").addEventListener("click", () => dialog.close());
// Close on backdrop click. Clicks on the dialog's own padding also target the dialog, so test the box bounds.
dialog.addEventListener("click", (e) => {
  if (e.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
});

renderList();

// Highlight the nav link of the section crossing the middle of the viewport
const navLinks = [...document.querySelectorAll(".topbar nav a")];
if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => {
        if (a.getAttribute("href") === `#${e.target.id}`) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main > section[id]").forEach((s) => navObserver.observe(s));
}

// Fade blocks in on first scroll into view; skipped for reduced motion
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-visible");
      obs.unobserve(e.target);
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".hero-inner > *, .hero-meta, .section > *").forEach((el) => {
    const i = [...el.parentElement.children].indexOf(el);
    el.style.setProperty("--delay", `${Math.min(i, 4) * 70}ms`);
    el.classList.add("reveal");
    revealObserver.observe(el);
  });
}

/* ---- Pointer/scroll interaction layer ---- */
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(pointer: fine)").matches;

// Scroll progress bar
const progress = document.querySelector(".scroll-progress");
if (progress) {
  let tick = false;
  const setProgress = () => {
    const el = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    progress.style.transform = `scaleX(${max > 0 ? el.scrollTop / max : 0})`;
    tick = false;
  };
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(setProgress); } }, { passive: true });
  setProgress();
}

// Sliding nav indicator tracks the active section link
const navEl = document.querySelector(".topbar nav");
const navInd = navEl?.querySelector(".nav-ind");
if (navInd) {
  const place = (a) => {
    navInd.style.left = `${a.offsetLeft}px`;
    navInd.style.top = `${a.offsetTop}px`;
    navInd.style.width = `${a.offsetWidth}px`;
    navInd.style.height = `${a.offsetHeight}px`;
    navInd.style.opacity = "1";
  };
  const syncInd = () => {
    const a = navEl.querySelector('a[aria-current="true"]');
    if (a) place(a); else navInd.style.opacity = "0";
  };
  const mo = new MutationObserver(syncInd);
  navLinks.forEach((a) => mo.observe(a, { attributes: true, attributeFilter: ["aria-current"] }));
  addEventListener("resize", syncInd);
  if (finePointer) {
    navLinks.forEach((a) => a.addEventListener("pointerenter", () => place(a)));
    navEl.addEventListener("pointerleave", syncInd);
  }
  syncInd();
}

// Hero glow + grid parallax ease toward the cursor
const heroEl = document.querySelector(".hero");
if (heroEl && finePointer && !reduceMotion) {
  let tgx = .72, tgy = .2, gx = .72, gy = .2, raf = 0;
  const glide = () => {
    gx += (tgx - gx) * .12;
    gy += (tgy - gy) * .12;
    heroEl.style.setProperty("--mx", gx.toFixed(4));
    heroEl.style.setProperty("--my", gy.toFixed(4));
    raf = Math.abs(tgx - gx) + Math.abs(tgy - gy) > .001 ? requestAnimationFrame(glide) : 0;
  };
  heroEl.addEventListener("pointermove", (e) => {
    const r = heroEl.getBoundingClientRect();
    tgx = (e.clientX - r.left) / r.width;
    tgy = (e.clientY - r.top) / r.height;
    if (!raf) raf = requestAnimationFrame(glide);
  });
  heroEl.addEventListener("pointerleave", () => { tgx = .72; tgy = .2; if (!raf) raf = requestAnimationFrame(glide); });
}

// 3D tilt + sheen on project cards, magnetic pull on buttons
if (finePointer && !reduceMotion) {
  const bindTilt = (card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--ry", `${((px - .5) * 9).toFixed(2)}deg`);
      card.style.setProperty("--rx", `${((.5 - py) * 9).toFixed(2)}deg`);
      card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
    });
  };
  list.querySelectorAll(".project").forEach(bindTilt);

  document.querySelectorAll(".button").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.setProperty("--tx", `${((e.clientX - (r.left + r.width / 2)) * .25).toFixed(1)}px`);
      b.style.setProperty("--ty", `${((e.clientY - (r.top + r.height / 2)) * .3).toFixed(1)}px`);
    });
    b.addEventListener("pointerleave", () => {
      b.style.setProperty("--tx", "0px");
      b.style.setProperty("--ty", "0px");
    });
  });

  // Portrait tilts toward the cursor
  const portrait = document.querySelector(".portrait");
  if (portrait) {
    portrait.addEventListener("pointermove", (e) => {
      const r = portrait.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      portrait.style.setProperty("--ry", `${((px - .5) * 12).toFixed(2)}deg`);
      portrait.style.setProperty("--rx", `${((.5 - py) * 12).toFixed(2)}deg`);
    });
    portrait.addEventListener("pointerleave", () => {
      portrait.style.setProperty("--rx", "0deg");
      portrait.style.setProperty("--ry", "0deg");
    });
  }
}

// Cursor-reactive constellation in the hero (paused when offscreen)
const canvas = document.querySelector(".hero-canvas");
if (canvas && heroEl && finePointer && !reduceMotion) {
  const ctx = canvas.getContext("2d");
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const rootStyle = getComputedStyle(document.documentElement);
  let W = 0, H = 0, pts = [], raf = 0, visible = true, pmx = -1e4, pmy = -1e4;
  const resize = () => {
    W = heroEl.clientWidth; H = heroEl.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.max(24, Math.min(72, Math.round(W * H / 15000)));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
    }));
  };
  const draw = () => {
    const col = rootStyle.getPropertyValue("--accent").trim() || "#ff7a1a";
    ctx.clearRect(0, 0, W, H);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const dx = p.x - pmx, dy = p.y - pmy, d2 = dx * dx + dy * dy;
      if (d2 < 16000) { const f = (1 - d2 / 16000) * .9, d = Math.sqrt(d2) + 1; p.x += dx / d * f; p.y += dy / d * f; }
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.globalAlpha = (1 - d / 120) * .25; ctx.strokeStyle = col; ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = .7; ctx.fillStyle = col;
    for (const p of pts) { ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 7); ctx.fill(); }
    ctx.globalAlpha = 1;
    raf = visible ? requestAnimationFrame(draw) : 0;
  };
  heroEl.addEventListener("pointermove", (e) => { const r = heroEl.getBoundingClientRect(); pmx = e.clientX - r.left; pmy = e.clientY - r.top; });
  heroEl.addEventListener("pointerleave", () => { pmx = -1e4; pmy = -1e4; });
  addEventListener("resize", resize);
  resize();
  new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible && !raf) raf = requestAnimationFrame(draw); }).observe(heroEl);
  raf = requestAnimationFrame(draw);
}

// Custom cursor — only on the real top-level site, not inside preview iframes
if (finePointer && !reduceMotion && window.self === window.top) {
  const dot = document.createElement("div");
  const ring = document.createElement("div");
  dot.className = "cursor-dot cursor-hidden";
  ring.className = "cursor-ring cursor-hidden";
  document.body.append(dot, ring);
  document.documentElement.classList.add("has-cursor");
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my, craf = 0;
  // Ring eases toward the pointer and stops once it has caught up; pointermove restarts it
  const spin = () => {
    rx += (mx - rx) * .2; ry += (my - ry) * .2;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    craf = Math.abs(mx - rx) + Math.abs(my - ry) > .1 ? requestAnimationFrame(spin) : 0;
  };
  addEventListener("pointermove", (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    dot.classList.remove("cursor-hidden"); ring.classList.remove("cursor-hidden");
    if (!craf) craf = requestAnimationFrame(spin);
  }, { passive: true });
  addEventListener("pointerdown", () => ring.classList.add("press"));
  addEventListener("pointerup", () => ring.classList.remove("press"));
  document.addEventListener("pointerover", (e) => { if (e.target.closest("a, button, .project")) ring.classList.add("grow"); });
  document.addEventListener("pointerout", (e) => { if (e.target.closest("a, button, .project")) ring.classList.remove("grow"); });
  document.addEventListener("mouseleave", () => { dot.classList.add("cursor-hidden"); ring.classList.add("cursor-hidden"); });
}

// Click ripple on buttons
if (!reduceMotion) {
  document.querySelectorAll(".button").forEach((b) => {
    b.addEventListener("pointerdown", (e) => {
      const r = b.getBoundingClientRect(), s = Math.max(r.width, r.height) * 2;
      const rip = document.createElement("span");
      rip.className = "ripple";
      rip.style.width = rip.style.height = `${s}px`;
      rip.style.left = `${e.clientX - r.left}px`;
      rip.style.top = `${e.clientY - r.top}px`;
      b.appendChild(rip);
      setTimeout(() => rip.remove(), 650);
    });
  });
}

// Back-to-top with circular scroll-progress ring
const toTop = document.querySelector(".to-top");
if (toTop) {
  const ring = toTop.querySelector(".bar");
  const C = 2 * Math.PI * 22;
  if (ring) { ring.style.strokeDasharray = `${C}`; ring.style.strokeDashoffset = `${C}`; }
  let tick = false;
  const upd = () => {
    const el = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    const p = max > 0 ? el.scrollTop / max : 0;
    if (ring) ring.style.strokeDashoffset = `${C * (1 - p)}`;
    toTop.classList.toggle("show", el.scrollTop > 500);
    tick = false;
  };
  addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  upd();
}

// Tilt + spotlight on panels and the facts card, magnetic focus chips
if (finePointer && !reduceMotion) {
  const bindTiltSpot = (el, maxDeg) => {
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      el.style.setProperty("--ry", `${((px - .5) * maxDeg).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${((.5 - py) * maxDeg).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    });
    el.addEventListener("pointerleave", () => { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); });
  };
  document.querySelectorAll(".panel, .facts").forEach((el) => bindTiltSpot(el, 5));
  document.querySelectorAll(".focus li").forEach((li) => {
    li.addEventListener("pointermove", (e) => {
      const r = li.getBoundingClientRect();
      li.style.transform = `translate(${((e.clientX - (r.left + r.width / 2)) * .3).toFixed(1)}px, ${((e.clientY - (r.top + r.height / 2)) * .4).toFixed(1)}px)`;
    });
    li.addEventListener("pointerleave", () => { li.style.transform = ""; });
  });
}

// Decode (scramble) section headings as they scroll into view
if (!reduceMotion && "IntersectionObserver" in window) {
  const glyphs = "ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789/#*<>";
  const scramble = (el) => {
    const final = el.textContent, n = final.length, start = performance.now(), dur = 650;
    // Screen readers get the real text; the scrambled copy is hidden from them
    const shown = document.createElement("span"), real = document.createElement("span");
    shown.setAttribute("aria-hidden", "true");
    real.className = "sr-only";
    real.textContent = final;
    el.replaceChildren(shown, real);
    const step = (t) => {
      const prog = Math.min(1, (t - start) / dur), reveal = prog * n;
      let out = "";
      for (let i = 0; i < n; i++) {
        if (final[i] === " ") out += " ";
        else out += i < reveal ? final[i] : glyphs[(Math.random() * glyphs.length) | 0];
      }
      shown.textContent = out;
      if (prog < 1) requestAnimationFrame(step); else el.textContent = final;
    };
    requestAnimationFrame(step);
  };
  const headObs = new IntersectionObserver((es, obs) => {
    es.forEach((e) => { if (e.isIntersecting) { scramble(e.target); obs.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -15% 0px" });
  document.querySelectorAll(".section h2").forEach((h) => headObs.observe(h));
}
