/**
 * bài tập 1: cho người dùng nhập vào 3 số nguyên. viết chương trình xuất ra 3 số theo thứ tự tăng dần
 * 
 */

 document.getElementById("btnSort").onclick = function () {
    //đầu vào: nhập vào 3 số nguyên
        var a=document.getElementById("soNguyen1").value*1;
        var b=document.getElementById("soNguyen2").value*1;
        var c=document.getElementById("soNguyen3").value*1;
    //xử lý: 
    /**
     * gán max=a;
     * nếu b>= max thì gán max=b
     * nếu c>= max thì gán max=c
     * gán min =c;
     * nếu b<=min thì gán min=b
     * nếu a<=min thì gán min=a
     * 
     * tạo biến ava
     * nếu a <= max , a> min => ava =a
     * nếu b <= max , b >min  => ava =b
     * còn lại thì ava =c
     * 
     */
        var max=a;
        if (b>=max) {
            max=b;
            console.log("max: " + max);
            
        }
        if (c>=max) {
            max=c;
            console.log("max: " + max);
            
        }
        var min=c;
        if (b<=min){
            min=b;
            console.log("min: " + min);
        }
        if(a<=min) {
            min=a;
            console.log("min: " + min);
        }
    
        var ava;
        if (a <=max && a > min){
            ava=a;
            console.log("ava: " + ava);
            
        }
        else if(b<=max && b>min){
            ava=b;
            console.log("ava: " + ava);
            
        }
        else {
            ava=c;
            console.log("ava: " + ava);
        
    
        }
    
        //đầu ra:
    
        var ketQua="sắp xếp số nguyên tăng dần " + min +" "+ ava + " " +max;
        document.getElementById("footerKetQua").innerHTML=ketQua;
    
    }
    
    
    /**
     * 
     * 
     * BÀI TẬP 2 Viết chương trình “Chào hỏi” các thành viên trong gia đình với các đặc điểm. Đầu tiên máy sẽ
    hỏi ai sử dụng máy. Sau đó dựa vào câu trả lời và đưa ra lời chào phù hợp. Giả sử trong gia
    đình có 4 thành viên: Bố (B), Mẹ (M), anh Trai (A) và Em gái (E)
     */
    //đầu vào: cho người dùng chọn ai đang ngồi máy tính : bố, mẹ , anhtrai, em gái
    
    
    document.getElementById("btnChao").onclick = function () {
        var chonThanhVien = document.getElementById("thanhVienGD").value
    /** xử lý
     * nếu chonThanhVien = B => gán biến loiChao = Chào Bố
     * nếu chonThanhVien = M => gán biến loiChao = Chào Mẹ
     * nếu chonThanhVien = A => gán biến loiChao = Chào anh trai
     * còn lại loiChao = Chào em gái;
     */
        var loiChao;
        if(chonThanhVien=="B"){
            loiChao = "Chào Bố";
            console.log(loiChao);
        } else if(chonThanhVien=="M"){
            loiChao = "Chào Mẹ";
            console.log(loiChao);
        }
        else if (chonThanhVien=="A"){
            loiChao = "Chào Anh Trai";
            console.log(loiChao);
        } else{
            loiChao = "Chào em gái";
            console.log(loiChao);
        }
    
    //đầu ra: 
        var ketQua2= loiChao + " đang ngồi máy tính"
        document.getElementById("footerKetQuaChao").innerHTML=ketQua2;
    
    
    }
    
    
    /**
     *  bài tập 3: Cho 3 số nguyên. Viết chương trình xuất ra có bao nhiêu số lẻ và bao nhiêu số chẵn.
     */
    
    
    
    /**
     * a1 b1 c1
     * soChan = 0
     * soLe = 0
     * nếu a = ++soChan
     * nếu 
     * 
     */
    // đầu vào 
    
    document.getElementById("btnTinh").onclick = function () {
    
        //đầu vào: cho người dùng nhập 3 biến a1, b1, c1 và tạo biến soChan =0 và soLe=0
        var a1=document.getElementById("soNguyena").value*1;
        var b1=document.getElementById("soNguyenb").value*1;
        var c1=document.getElementById("soNguyenc").value*1;
        var soChan = 0;
        var soLe = 0;
        
    
        //xử lý : 
        /**
         * nếu a1 %2=0 thì  soChan= soChan +1 ngược lại thì soLe = soLe+1
        * trường hợp b1 và c1 tương tự
        */
    
        if (a1%2==0){
            soChan= soChan +1;
        } else {
            soLe = soLe+1;
        }
        
        if (b1%2==0){
            soChan= soChan +1;
        } else {
            soLe = soLe+1;
        }
        
        if (c1%2==0){
            soChan= soChan +1;
        } else {
            soLe = soLe+1;
        }
    
        // đầu ra:
        var ketQua3= "tổng số chẵn :" + soChan + " " +"tổng số lẻ :" +soLe;
        console.log("số chẵn :" + soChan, "số lẻ :" +soLe);
        document.getElementById("footerKetQuaTinh").innerHTML=ketQua3;
    
    
    }
    
    
    /**
     * bài tập 4: Viết chương trình cho nhập 3 cạnh của tam giác. Hãy cho biết đó là tam giác gì?
    • Ví dụ: a=2, b=2, c=1 => Tam giác cân
    • a = 3, b=3 c=3 => Tam giác đều
    • a = 3, b = 4, c=5 => Tam giác vuông (đinh lý Pytago)
    
    giả thiết nhận biết tam giác bình thường: tổng 2 canh bất kì lớn hòn cạnh còn lại
     - tam giác cân: 2 cạnh bên tam giác bằng nhau => tam giác cân
     - tam giác đều: 3 cạnh tam giác bằng nhau => tam giác đều
     - tam giác vuông: thỏa điều kiện định lý pyrago => tổng bình phương 2 cạnh góc vuông bằng bình phương cạnh huyền
    
     */
    
     //đầu vào
     document.getElementById("btnTinhTamGiac").onclick = function () {
        //đầu vào: nhập vào 3 cạnh
            var c1=document.getElementById("canh1").value*1;
            var c2=document.getElementById("canh2").value*1;
            var c3=document.getElementById("canh3").value*1;
    
        //xử lý:điều kiện đầu tiên để là hình tam giác thì c1<c2+c3 && c2<c1+c3 && c3<c1+c2
        // đặt điều kiện cho để là tam giác vuông, tam giác cân và tam giác đều còn lại thì tam giác nhọn
        //trường hợp  ng dùng nhập vào 3 cạnh ko thỏa điều kiện tam giác thì trả kết quả đây ko phải là hình tam giác
        var ketQua4;
        if(c1<c2+c3 && c2<c1+c3 && c3<c1+c2){
            if(c1*c1 == c2*c2 + c3*c3 || c2*c2 == c1*c1+ c3*c3 || c3*c3==c1*c1 + c2*c2 ){
                ketQua4= "tam giác vuông";
                console.log(ketQua4);
            } else if(c1==c2 && c2==c3){
                ketQua4= "tam giác đều";
                console.log(ketQua4);
            } else if (c1==c2 || c1==c3 || c2==c3){
                ketQua4= "tam giác cân";
                console.log(ketQua4);
            } else {
                ketQua4= "tam giác nhọn";
                console.log(ketQua4);
            }
        } else{
            ketQua4= "đây không phải là hình tam giác";
                console.log(ketQua4);
    
        }
        // đầu ra: 
        var tamGiacGi= "ĐÂY LÀ: " +ketQua4;
        document.getElementById("footerKetQuaTG").innerHTML=tamGiacGi;
    
    
    }
    
    
    
    
    
    
    
    
    