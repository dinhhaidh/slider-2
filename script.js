document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
} 

// khai bao document getElementById khi người ta ẩn nút nẽt thì chuyện gì xảy ra, onlick khi ấn bằng 1 cái function thì chạy 1 cái bên trong 
// lấy let lists lấy toàn bộ item và cái slide này bằng document  (querySelectorAll là tất cả).item;
//  gọi đến slide document.getElementById('slide') và appendChild(lists[0]) ở vị trí 0 ;
// appendChild thay vao gia tri cuoi cung

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
    // prev là nút nhấn ra sau
    // prepend la thêm  vi tri đầu  [lists.length - 1]);
    // trong js, lập trình là đếm số 0 1 2 3 4   mà cs 5 phần tử đếm từ vị trí 0 giá trị cuối cùng là 4 có 5 phần tử,  5 cái mà trừ đi một thì còn 4 là cái cuối cùng 
    // tổng -1 là vị trí cuối cùng, khi nó mà thay đổi bị rung thì active thì nó sẽ biến nhỏ lại 
}