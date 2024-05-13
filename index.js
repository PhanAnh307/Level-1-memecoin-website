document.addEventListener('DOMContentLoaded', function() {
    var caElement = document.getElementById('caText');
    var alertBox = document.getElementById('alertBox');
    var closeButton = document.getElementById('closeButton');
    var overlay = document.getElementById('overlay');
    var copiedImage = document.getElementById('copiedImage'); // Lấy thẻ ảnh
  
    // Khi di chuột vào .ca, thay đổi con trỏ chuột thành pointer
    caElement.addEventListener('mouseover', function() {
      this.style.cursor = 'pointer';
    });
  
    // Khi click chuột trái vào .ca, sao chép nội dung của nó
    caElement.addEventListener('click', function() {
      // Tạo một thẻ input để sao chép nội dung của .ca
      var inputElement = document.createElement('input');
      inputElement.value = this.textContent;
      document.body.appendChild(inputElement);
  
      // Chọn nội dung của thẻ input
      inputElement.select();
      inputElement.setSelectionRange(0, 99999); /* For mobile devices */
  
      // Sao chép nội dung đã chọn
      document.execCommand('copy');
  
      // Xóa thẻ input sau khi sao chép
      document.body.removeChild(inputElement);
  
      // Hiển thị thông báo và overlay
      alertBox.style.display = 'block';
      overlay.style.display = 'block';
      copiedImage.style.display = 'block'; // Hiển thị ảnh
  
      // Ẩn thông báo và overlay sau 2 giây
      setTimeout(function() {
        alertBox.style.display = 'none';
        overlay.style.display = 'none';
        copiedImage.style.display = 'none'; // Ẩn ảnh
      }, 5000); // 2 giây
  
      // Khi click vào nút đóng
      closeButton.addEventListener('click', function() {
        // Ẩn thông báo, overlay và ảnh
        alertBox.style.display = 'none';
        overlay.style.display = 'none';
        copiedImage.style.display = 'none'; // Ẩn ảnh
      });
    });
  });
  