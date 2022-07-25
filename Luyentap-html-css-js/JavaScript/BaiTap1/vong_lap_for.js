<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
        <script language="javascript">
            function print_number()
            {
                // Lấy number
                var number = document.getElementById("number").value;
                
                // Ép number sang kiểu INT
                number = parseInt(number);
                
                // Lặp để in kết quả
                var html = '';
                for (var i = 1; i <= number; i++){
                    html += i + ' <br/>';
                }
                document.getElementById("result").innerHTML = html;
            }
        </script>
        <form method="get" action="">
            Nhập số: <input type="text" id="number" value="0"/>
            <input type="button" value="In kết quả" onclick="print_number()"/>
        </form>
        <div id="result">

        </div>
    </body>
</html>