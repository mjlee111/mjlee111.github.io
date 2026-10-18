// Project entries. Edit this array to add, remove, or reorder projects.
// image: path under images/ (optional). links: [{ label, url }] (optional).
const PROJECTS = [
  {
    title: "IGRIS-B",
    year: "2025",
    meta: "ROBROS",
    summary: "Developed software/hardware and imitation learning pipelines for ROBROS’s IGRIS-B humanoid robot, enabling it to learn and execute manipulation tasks from human demonstrations for practical real-world automation.",
    tags: ["AI", "Humanoid", "ACT"],
    image: "images/igris-b_overview.png",
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
    image: "images/kuls.jpg",
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
    image: "images/kubo.png",
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
    image: "images/baemin.png",
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
    image: "images/defense.png",
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
    image: "images/tb3.png",
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
    image: "images/loam.png",
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
    image: "images/chbs.png",
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
    image: "images/caterpion.png",
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

function renderList() {
  list.innerHTML = PROJECTS.map((p, i) => `
    <button class="project" type="button" data-index="${i}" aria-haspopup="dialog">
      <div class="project-thumb">${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : ""}</div>
      <div class="project-body">
        <div class="project-top"><span class="meta">${esc(p.meta)}</span><span class="year">${esc(p.year)}</span></div>
        <h3>${esc(p.title)}</h3>
        <p class="summary">${esc(p.summary)}</p>
        ${p.tags?.length ? `<ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
      </div>
    </button>`).join("");
}

function openProject(i) {
  const p = PROJECTS[i];
  content.innerHTML = `
    <h2 id="dlg-title">${esc(p.title)}</h2>
    <p class="meta">${esc(p.year)}, ${esc(p.meta)}</p>
    ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}">` : ""}
    ${(p.details || []).map((d) => `<h3>${esc(d.heading)}</h3><p>${esc(d.text)}</p>`).join("")}
    ${p.links?.length ? `<h3>Links</h3><p>${p.links.map((l) =>
      `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("<br>")}</p>` : ""}`;
  dialog.showModal();
}

list.addEventListener("click", (e) => {
  const btn = e.target.closest(".project");
  if (btn) openProject(Number(btn.dataset.index));
});
dialog.querySelector(".dlg-close").addEventListener("click", () => dialog.close());
// Close on backdrop click
dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

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
