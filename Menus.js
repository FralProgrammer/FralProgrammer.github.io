window.onload = function(){ 


    $(document).ready(function(){

        //Mobile Menu Controls 
            $("#MobileMenu").click(function(){
                $(".Menu").toggle();
            });

    });

    /*
        MODAL Javascript Setup
    */

        var FE_Modal = document.getElementById('FrontEndModal');
        var BE_Modal = document.getElementById('BackEndModal');
        var Frame_Modal = document.getElementById('FrameWorkModal');
        var CMS_Modal = document.getElementById('CMSModal');
        var TW_Modal = document.getElementById('TeamModal');
        var FE_btn = document.getElementById("FrontEnd");
        var BE_btn = document.getElementById("BackEnd");
        var Frame_btn = document.getElementById("FrameWork");
        var CMS_btn = document.getElementById("CMS");
        var TW_btn = document.getElementById("Team");
        var spanFE = FE_Modal.getElementsByClassName("Modal_close")[0];
        var spanBE = BE_Modal.getElementsByClassName("Modal_close")[0];
        var spanFrame = Frame_Modal.getElementsByClassName("Modal_close")[0];
        var spanCMS = CMS_Modal.getElementsByClassName("Modal_close")[0];
        var spanTW = TW_Modal.getElementsByClassName("Modal_close")[0];


        /*FRONTEND*/
        //Open FrontEnd Modal
        FE_btn.onclick = function() {
        FE_Modal.style.display = "block";
        }

        /*BACKEND*/
        //Open BackEnd Modal
        BE_btn.onclick = function() {
        BE_Modal.style.display = "block";
        }

        /*Frameworks*/
        //Open Framework Modal
        Frame_btn.onclick = function() {
        Frame_Modal.style.display = "block";
        }

        /*CMS*/
        //Open CMS Modal
        CMS_btn.onclick = function() {
        CMS_Modal.style.display = "block";
        }

        /*TEAM*/
        //Open Team Modal
        TW_btn.onclick = function() {
        TW_Modal.style.display = "block";
        }

        //Close Modal Using X
        spanFE.onclick = function() {
            FE_Modal.style.display = "none";
            }

        spanBE.onclick = function() {
            BE_Modal.style.display = "none";
            }

        spanFrame.onclick = function() {
            Frame_Modal.style.display = "none";
            }

        spanCMS.onclick = function() {
            CMS_Modal.style.display = "none";
            }

        spanTW.onclick = function() {
            TW_Modal.style.display = "none";
            }


        //Close Modal Using Space
        window.onclick = function(event) {
        if (event.target == FE_Modal) {
            FE_Modal.style.display = "none";
        }
        else if (event.target == Frame_Modal) {
            Frame_Modal.style.display = "none";
        }
        else if (event.target == BE_Modal) {
            BE_Modal.style.display = "none";
        }
        else if (event.target == CMS_Modal) {
            CMS_Modal.style.display = "none";
        }
        else if (event.target == TW_Modal) {
            TW_Modal.style.display = "none";
        }
        }


};