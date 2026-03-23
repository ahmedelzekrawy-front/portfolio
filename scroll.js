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