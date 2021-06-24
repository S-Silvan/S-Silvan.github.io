/*var Model={
    typing:{
        iType:0,jType:0,
        words:['Java','Web','Android'],
        flag:0,
        word:''
    }
}*/

var View={
    //Introduction
    /*type:function(){
        Model.typing.word=Model.typing.words[Model.typing.iType];//initializing word
        if(Model.typing.jType<Model.typing.word.length && Model.typing.flag==0){
            Model.typing.jType=View.typeAdd(Model.typing.jType);//type call
        }else{
            View.typeRemove();//remove call
        }
        setTimeout(View.type,260);//loop
    },
    typeAdd:function(j){
        document.getElementById('word').innerText+=Model.typing.word.charAt(j);//appending last letter
        j++;
        return j;
    },
    typeRemove:function(){
        if(Model.typing.jType>0){
            Model.typing.jType--;
            document.getElementById('word').innerText=Model.typing.word.substring(0,Model.typing.jType);//removing last letter
            Model.typing.flag=1;
        }else{Model.typing.flag=0;
            if(Model.typing.iType<(Model.typing.words.length-1)){
                Model.typing.iType++;
            }else{
                Model.typing.iType=0;
            }
        }
    },*/
    introductionAnimate:function(){
        //profile Picture animation
        document.getElementsByClassName('profile_picture')[0].style.transitionDelay='1.5s';
        document.getElementsByClassName('profile_picture')[0].style.transitionDuration='2s';
        document.getElementsByClassName('profile_picture')[0].style.transform='rotate(0deg)';
        //type function call
        //this.type();
    }
}

var Controller={
    init:function(){
        View.introductionAnimate();
    }
}

Controller.init();

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
