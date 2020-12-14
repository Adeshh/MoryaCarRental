<template>
  <div class="bar">
        <html lang="en" dir="ltr">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Responsive Sidebar Dashboard Template</title>
           
        </head>
        <body>

            <input type="checkbox" id="check">
            <!--header area start-->
            <header>
            <label for="check">
                <i class="fas fa-bars" id="sidebar_btn"></i>
            </label>
            <div class="left_area">
                
                <img src="../assets/Logo2.svg" >
            </div>
           <!-- <div class="right_area">
                <a href="#" class="logout_btn">Contact</a>
            </div>-->
            </header>
            <!--header area end-->
            <!--mobile navigation bar start-->
            <div class="mobile_nav">
            <div class="nav_bar">
                
                <i class="fa fa-bars nav_btn"></i>
            </div>
            <div class="mobile_nav_items">
              <a href="#"><i class="fas fa-road"></i><span><router-link to="/" class="adj_mobile">One-Way</router-link></span></a>
              <a href="#"><i class="fas fa-suitcase-rolling" ></i><span><router-link to="/outstation" class="adj_mobile">Outstation</router-link></span></a>
              <a href="#"><i class="fas fa-car" ></i><span><router-link to="/local" class="adj_mobile">Local</router-link></span></a>
              <a href="#"><i class="fas fa-info-circle" ></i><span><router-link to="/about" class="adj_mobile">About</router-link></span></a>
              <a href="#"><i class="fas fa-hands-helping"></i><span><router-link to="/help" class="adj_mobile">Help</router-link></span></a>
              <router-view/>
              
            </div>
            </div>
            <!--mobile navigation bar end-->
            <!--sidebar start-->
            <div class="sidebar">
              <a href="#"><i class="fas fa-road" style="margin-left:0px;"></i><span><router-link to="/" class="adj_desktop">One-Way</router-link></span></a>
              <a href="#"><i class="fas fa-suitcase-rolling" style="margin-left:4px;"></i><span><router-link to="/outstation" class="adj_desktop">Outstation</router-link></span></a>
              <a href="#"><i class="fas fa-car" style="margin-left:1px;"></i><span><router-link to="/local" class="adj_desktop">Local</router-link></span></a>
              <a href="#"><i class="fas fa-info-circle" style="margin-left:0px;"></i><span><router-link to="/about" class="adj_desktop">About</router-link></span></a>
              <a href="#"><i class="fas fa-hands-helping" style="margin-left:0px;"></i><span><router-link to="/help" class="adj_desktop">Help</router-link></span></a>
            <router-view/>
            </div>
            <!--sidebar end-->

           <!-- <div class="content">
             <div class="card">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div class="card">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <div class="card">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            </div> -->

            

        </body>
        </html>


  </div>
    
</template>
<script>
import $ from 'jquery'

export default {
    name: "Bar",
    mounted(){
        let externalScript = document.createElement('script')
        externalScript.setAttribute('src', "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js")
        document.head.appendChild(externalScript)

      $(document).ready(function(){
        $('.nav_btn').click(function(){
          $('.mobile_nav_items').toggleClass('active');
        });
      });
    },
    
}
</script>
<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css");

body{
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

header{
  z-index: 1;
  position: fixed;
  background: #22242A;
  padding: 0px 70px;
  width: calc(100% - 0%);
  top: 0;
  height: 70px;
}

.left_area h3{
  color: #fff;
  margin:0;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 900;
}

.left_area span{
  color: #19B3D3;
}

.logout_btn{
  padding: 2px;
  background: #19B3D3;
  text-decoration: none;
  float: right;
  margin-top: -30px;
  margin-right: -50px;
  border-radius: 2px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  transition: 0.5s;
  transition-property: background;
}

.logout_btn:hover{
  background: #0B87A6;
  
}

.sidebar{
  z-index: 1;
  top: 0;
  background: #2f323a;
  margin-top: 70px;
  padding-top: 30px;
  position: fixed;
  left: 0;
  width: 250px;
  height: calc(100% - 9%);
  transition: 0.5s;
  transition-property: left;
  overflow-y: auto;
}

.profile_info{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}





.sidebar a{
  color: #fff;
  display: block;
  width: 100%;
  line-height: 60px;
  text-decoration: none;
  padding-left: 40px;
  box-sizing: border-box;
  transition: 0.5s;
  transition-property: background;
}

.sidebar a:hover{
  background: #19B3D3;
}

.sidebar i{
  padding-right: 10px;
}

label #sidebar_btn{
  z-index: 1;
  color: #fff;
  position: fixed;
  cursor: pointer;
  left: 25px;
  font-size: 20px;
  margin: 18px 0;
  transition: 0.5s;
  transition-property: color;
}

label #sidebar_btn:hover{
  color: #19B3D3;
}

#check:checked ~ .sidebar{
  left: -185px;
}

#check:checked ~ .sidebar a span{
  display: none;
}

#check:checked ~ .sidebar a{
  font-size: 20px;
  margin-left: 165px;
  width: 100%;
}

.content{
  width: (100% - 250px);
  margin-top: 60px;
  padding: 20px;
  margin-left: 250px;
  background: white;
  
  
  height: 100vh;
  transition: 0.5s;
}

#check:checked ~ .content{
  margin-left: 60px;
}

#check:checked ~ .sidebar .profile_info{
  display: none;
}

#check{
  display: none;
}

.mobile_nav{
  display: none;
}

.content .card p{
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  font-size: 14px;
  opacity: 0.8;
}

/* Responsive CSS */

@media screen and (max-width: 780px){
  .sidebar{
    display: none;
    
  }

  #sidebar_btn{
    display: none;
  }

  .content{
    margin-left: 0;
    margin-top: 0;
    padding: 10px 20px;
    transition: 0s;
  }

  #check:checked ~ .content{
    margin-left: 0;
  }

  .mobile_nav{
    display: block;
    width: calc(100% - 0%);
  }

  .nav_bar{
    background: #222;
    width: (100% - 0px);
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

  }

  

  .nav_bar .nav_btn{
    color: #fff;
    font-size: 22px;
    cursor: pointer;
    transition: 0.5s;
    transition-property: color;
  }

  .nav_bar .nav_btn:hover{
    color: #19B3D3;
  }

  .mobile_nav_items{
    background: #2F323A;
    display: none;
    height:300px;
  }

  .mobile_nav_items a{
    color: #fff;
    display: block;
    text-align: center;
    letter-spacing: 1px;
    line-height: 60px;
    text-decoration: none;
    box-sizing: border-box;
    transition: 0.5s;
    transition-property: background;
  }

  .mobile_nav_items a:hover{
    background: #19B3D3;
  }

  .mobile_nav_items i{
    padding-right: 110px;
  }

  .active{
    display: block;
  }
}
.adj_desktop{
  margin-top:-59px;
  margin-left:10px;
}
.adj_mobile{
  margin-right:-20px;
  margin-top:-60px;
}
                           


</style>
