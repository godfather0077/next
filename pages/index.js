
import { Component } from "react"
import Head from "next/head"
import Link from 'next/link'
import Login from "./Login";




export default class extends Component {
  render() {
    return (
      <>
        <Head>
        // Responsive meta tag
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        //  bootstrap CDN
        <link rel="stylesheet" href=
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"/>
    <script src=
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
            </script>
            <script src=
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js">
            </script>
            <script src=
        "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js">
            </script>
        </Head>

<section>
        <div>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
            <img src="https://www.livetechskills.com/Encyc/2021/2/15/2_02_54_21_About-Us_1_H@@IGHT_251_W@@IDTH_770.png" style={{width:120 ,height:42}}class="d-inline-block align-top" alt=""/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Courses</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Webinars</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resources</a>
            </li>
            <form class="form-inline my-2 my-lg-0">
                
                
            <Link href="/Signup"><button type="button" class="btn btn-outline-danger">Login/Signup</button></Link>
              </form>
              <li class="nav-item">
                <a class="nav-link" href="#">TollFree:1800******</a>
              </li>
              <a class="imgnav" href="#">
                <img src="https://www.vectorkhazana.com/assets/images/products/Google_Mail_ico.jpg" style={{width:20,height:20}} alt=""/>
              </a>
            
            
          </ul>
        </div>
      </nav>
      </div>

      <div class="banner text-left">
          <h1>Be a Certified Ethical Hacker</h1>
   
          
          <div class="insider">  
          <p>Begineer/Intermediate/Courses by Livewire</p>
          <Link href="/Signup"><button type="button" class="btn btn-outline-light">Sign-up Today</button></Link>
  
        </div>  

      </div>

    </section>
    <div class="explore-courses text-center">
        <input type="text" class="form-control" placeholder="What do you want to learn..." />
        <button type="button" class="btn btn-danger">Explore Courses</button>

    </div>



    <div class="popular text-center">
          <div>
          <h5>OUR POPULAR COURSES</h5>
        </div>
        </div>
        <div class="underl text-center">
        <p style={{fontSize:30,color:"red"}}>___</p>
          
        </div>
        <div class="row">


        <div class="col-12 col-md-6 col-lg-3">
          <div class="team-member">
          <img src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
              <div class="inside">

              <h4>Business Analytics</h4>
              <h6>During 2 weeks</h6>
              <button type="button" class="btn btn-outline-danger">Join Now</button>
            </div>
              
              
          </div>
      </div>

      
      <div class="col-sm-12 col-md-6 col-lg-3">
        <div class="team-member">
            <img src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
            <div class="inside">

              <h4>Business Analytics</h4>
              <h6>During 2 weeks</h6>
              <button type="button" class="btn btn-outline-danger">Join Now</button>
            </div>
            
            
        </div>
    </div>

      
        <div class="col-12 col-md-6 col-lg-3">
          <div class="team-member">
          <img src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>

              <div class="inside">

                <h4>Business Analytics</h4>
                <h6>During 2 weeks</h6>
                <button type="button" class="btn btn-outline-danger">Join Now</button>
              </div>
              
              
          </div>
      </div>

     
        <div class="col-12 col-md-6 col-lg-3">
          <div class="team-member">
            
            
          <img src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
           
              
              <div class="inside">

                <h4>Business Analytics</h4>
                <h6>During 2 weeks</h6>
                <button type="button" class="btn btn-outline-danger">Join Now</button>
              </div>
              
              
          </div>
      </div>
        </div>


        <div class="row">


          <div class="col-12 col-md-6 col-lg-3">
            <div class="team-member">
            <img src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
                <div class="inside">

                  <h4>Business Analytics</h4>
                  <h6>During 2 weeks</h6>
                  <button type="button" class="btn btn-outline-danger">Join Now</button>
                </div>
                
                
            </div>
        </div>
  
        
        <div class="col-sm-12 col-md-6 col-lg-3">
          <div class="team-member">
          <img src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
              <div class="inside">

                <h4>Business Analytics</h4>
                <h6>During 2 weeks</h6>
                <button type="button" class="btn btn-outline-danger">Join Now</button>
              </div>
              
              
          </div>
          
      </div>
      
  
        
          <div class="col-18 col-md-6 col-lg-3">
            <div class="team-member">
            <img src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
                <div class="inside">

                  <h4>Business Analytics</h4>
                  <h6>During 2 weeks</h6>
                  <button type="button" class="btn btn-outline-danger">Join Now</button>
                </div>
                
                
            </div>
        </div>
  
       
          <div class="col-12 col-md-6 col-lg-3">
            <div class="team-member">
              <figure class="blog-post-thumbnail position-relative m-0">
              <img src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/557573/gettyimages-1145589623.jpg&w=2000&op=resize" alt="new"/>
              </figure>
              <div class="inside">

                <h4>Business Analytics</h4>
                <h6>During 2 weeks</h6>
                <button type="button" class="btn btn-outline-danger">Join Now</button>
              </div>
                
            </div>
        </div>
  
          </div>
          <div class="new text-center">
            <div>
            <p>View All Courses</p>
            </div>
          </div>
          
<nav class="navbarr" style={{backgroundColor:"#352879"}}>
  
</nav>
    
</>
    )
  }
}