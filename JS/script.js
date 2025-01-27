let currentIndex = 0;
const images = document.querySelectorAll(".slider img");
const circles = document.querySelectorAll(".circle");
const totalImages = images.length;
let interval;

// تابع به‌روزرسانی تصویر و دایره فعال
function updateActiveImage(newIndex) {
  // حذف کلاس active از تصویر و دایره فعلی
  images[currentIndex].classList.remove("active");
  circles[currentIndex].classList.remove("active-circle");

  // تنظیم index جدید
  currentIndex = newIndex;

  // اضافه کردن کلاس active به تصویر و دایره جدید
  images[currentIndex].classList.add("active");
  circles[currentIndex].classList.add("active-circle");
}

// تابع اتوماتیک برای رفتن به تصویر بعدی
function startSlider() {
  interval = setInterval(() => {
    let nextIndex = (currentIndex + 1) % totalImages;
    updateActiveImage(nextIndex);
  }, 3000);
}

// توقف تایمر و راه‌اندازی مجدد از تصویر انتخاب‌شده
function resetSlider(newIndex) {
  clearInterval(interval);
  updateActiveImage(newIndex);
  startSlider(); // راه‌اندازی مجدد تایمر از تصویر جدید
}

// اضافه کردن رویداد کلیک به دایره‌ها
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    resetSlider(index); // رفتن به تصویر کلیک‌شده
  });
});

// شروع خودکار اسلایدر
startSlider();
