const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

// NÚT NEXT CỦA COMMENT
next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

//  NÚT RETURN CỦA COMMENT
prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 4) {
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

// HÀM CUỘN ĐẾN CUỐI TRANG
document.addEventListener('DOMContentLoaded', function() {
  var scrollToBottomButton = document.getElementById('scrollToBottomButton');
  scrollToBottomButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
      });
  });
});

// HÀM CUỘN ĐẾN ĐẦU TRANG
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// HÀM CUỘN CỦA Z-INDEX
window.addEventListener('scroll', function() {
  var overlay = document.querySelector('.overlay');
  if (window.scrollY > 0) {
      overlay.style.top = '13px';
  } else {
      overlay.style.top = '45px'; // Đặt lại top khi trang không cuộn
  }
});

// CLICK VÀO TỪNG SẢN PHẨM CHUYỂN HƯỚNG ĐẾN TRANG SẢN PHẨM TƯƠNG ỨNG
document.querySelectorAll(".sanpham").forEach(function(item) {
  item.addEventListener("click", function() {
      var productName = item.querySelector(".font").textContent.trim();
      switch (productName) {
          case "KEM DƯA LƯỚI":
              window.location.href = "kemtuoi.html"; 
              break;
          case "KEM QUE SOCOLA ĐẬU PHỘNG":
              window.location.href = "kemque.html"; 
              break;
          case "KEM ỐC QUẾ SẦU RIÊNG":
            window.location.href = "kemocque.html"
            break;
          case "KEM MOCHI VIỆT QUẤT":
            window.location.href = "kemmochi.html"
            break;
          case "KEM MOCHI MƠ TÂY":
            window.location.href = "kemmochi.html"
            break;
          case "KEM HỘP CỐM 85g":
            window.location.href = "kemhop85g.html"
            break;
          case "KEM HỘP CỐM CACAO 450g":
            window.location.href = "kemhop450g.html"
            break;
          default:
              break;
      }
  });
});


