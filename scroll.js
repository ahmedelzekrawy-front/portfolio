document.addEventListener("DOMContentLoaded", () => {
  // 1. أنيميشن ظهور العناصر عند السكرول
  const animatedBoxes = document.querySelectorAll(".skill_box, .project_box");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedBoxes.forEach((box) => observer.observe(box));

  // 2. إظهار وإخفاء زرار الصعود (Scroll To Top)
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show_btn");
      } else {
        scrollTopBtn.classList.remove("show_btn");
      }
    });
  }

  // 3. فتح وقفل قائمة الموبايل (Menu)
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.querySelector(".links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show_links");
    });
  }

  // 4. تشغيل وظيفة تحديث التاريخ
  updateFooterDate();
});

// وظيفة تحديث التاريخ في الفوتر
function updateFooterDate() {
    const dateElement = document.getElementById('full-date');
    if (dateElement) {
        const now = new Date();
        // تنسيق: يوم/شهر/سنة
        dateElement.innerText = now.toLocaleDateString('en-GB'); 
    }
}
/* --- تشغيل الماوس الجديد --- */
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    document.querySelectorAll("a, button, .socialContainer").forEach(el => {
        el.addEventListener("mouseenter", () => { cursor.classList.add("active"); follower.classList.add("active"); });
        el.addEventListener("mouseleave", () => { cursor.classList.remove("active"); follower.classList.remove("active"); });
    });

   
});

/* --- Dark/Light Mode Toggle (Refactored for Switch) --- */
document.addEventListener("DOMContentLoaded", () => {
    // نجلب الـ Input checkbox الجديد
    const themeToggleInput = document.getElementById("themeToggleInput");
    const body = document.body;

    // 1. فحص هل المستخدم كان مختار الوضع المضيء؟
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        if (themeToggleInput) {
            themeToggleInput.checked = true; // نفعّل الـ Switch
        }
    }

    // 2. لما الـ Switch يتغير (change)
    if (themeToggleInput) {
        themeToggleInput.addEventListener("change", () => {
            // لو الـ checkbox متشيك (يعني رايح للـ Light)
            if (themeToggleInput.checked) {
                body.classList.add("light-mode");
                localStorage.setItem("theme", "light");
            } else {
                // لو مش متشيك (راجع للـ Dark)
                body.classList.remove("light-mode");
                localStorage.setItem("theme", "dark");
            }
        });
    }
});
