/**
 * Created by CJuser on 2016-11-02.
 */

function insertBook(){

    //enter key가 입력됐을때 사용자가 입력한 내용을 가지고
    //서버 프로그램 Ajax방식으로 호출

    var ss = $("#blah").attr("src");
    alert( $("#booknumber").val());
    alert(ss);

        $.ajax({
            // url : 서버 프로그램에 대한 url
            url:"http://localhost:7070/book/bookInsert",
            // type: 전송방식
            type: "GET",
            // 만약 서버쪽에서 보내주는 데이터가 JSON이면

            dataType : "jsonp",
            //클라이언트가 서버쪽에 보내주는 데이터
            jsonp : "callback",

            data:{

                imgfile : $("#blah").attr("src"),
                isbn : $("#booknumber").val(),
                booktitle : $("#booknumber").val(),
                bookauthor : $("#bookauthor").val(),
                bookprice : $("#bookprice").val(),
                bookpub : $("#bookpub").val(),
                booktran : $("#booktran").val()

            },

            //서버쪽 프로그램을 실행시키는 과정이 성공하면
            success : function(){
                alert("도서등록이 완료되었습니다.");

                $(location).attr("href","bookListall.html");

            },
            //서버쪽 프로그램을 실행시키는 과정이 실패하면!!
            error : function(){
                alert("코드 다시짜라~!")
            }
        });
}



// 이미지 올리면 미리보기 코드
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}


//세션을 확인해서 로그인, 로그아웃으로 바꿈
$(function(){

    var xx ="f";

    $.ajax({

        // url : 서버 프로그램에 대한 url
        url:"http://localhost:7070/book/sessionCheck",
        // type: 전송방식

        type: "GET",
        // 만약 서버쪽에서 보내주는 데이터가 JSON이면

        dataType : "jsonp",
        //클라이언트가 서버쪽에 보내주는 데이터

        jsonp : "callback",

        data:{
            quit : xx

        },

        //서버쪽 프로그램을 실행시키는 과정이 성공하면
        success : function(result){

            if(result==true){

                $(".inout").text("로그아웃");
                $(".inout").attr("href","").attr("id","out");
            }
            else{

                $(location).attr("href","index1.html");
                $(".inout").text("로그인");
            }

        },
        //서버쪽 프로그램을 실행시키는 과정이 실패하면!!
        error : function(){
            alert("서버에 문제가있습니다.~");
        }
    });

});





















