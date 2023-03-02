import React from "react";

function Header() {
  return (
    <div className="banner">
         <header class="header">
  
        <a href="#" class="logo">Blog-Port</a>
        
        <input class="side-menu" type="checkbox" id="side-menu"/>
        <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
        
        <nav class="nav">
            <ul class="menu">
                <li><a href="<Login/>">Sign In</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h1>
                Upload Your Work
            </h1>
        </article>
    </main>
    </div>
  );
}

export default Header;