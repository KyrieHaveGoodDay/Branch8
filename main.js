$(function(){
    var len = 130; // 超過50個字以"..."取代
    $(".JQellipsis").each(function(i){
        if($(this).text().length>len){
            $(this).attr("title",$(this).text());
            var text=$(this).text().substring(0,len-1)+"...";
            $(this).text(text);
        }
    });
});

new Vue ({
    el:"#content",
    data:{
        datas:null
    },

    mounted() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET","https://fakerapi.it/api/v1/custom?title=city&image=image&description=text&date=dateTime&phone=phone&tag1=pokemon&tag2=pokemon&tag3=pokemon&address=streetAddress",true)
        xhr.send();
        xhr.onload = () => {
            var obj = JSON.parse(xhr.responseText);
            this.datas = obj.data;
            // console.log(datas);
        }
    }
});