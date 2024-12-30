let display = document.getElementById('display');

// إضافة قيمة إلى الشاشة
function appendValue(value) {
  display.value += value;
}

// مسح الشاشة
function clearDisplay() {
  display.value = '';
}

// حذف آخر إدخال
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// حساب النتيجة مع التحقق من القسمة على صفر
function calculate() {
  try {
    // التحقق إذا كانت هناك عملية قسمة على صفر
    if (display.value.includes('/0')) {
      display.value = 'لا يمكن القسمة على صفر';
      return;
    }

    display.value = eval(display.value);
  } catch (e) {
    display.value = 'خطأ';
  }
}
