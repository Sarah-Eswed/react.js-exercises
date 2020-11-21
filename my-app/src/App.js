import React from 'react';
import './App.css';
import MyClass from './MyClass';
import Bdour from './Images/bdour.png';
import Ashraf from './Images/ashraf.png';

function App() {
  return (
    <div className="App">
      
     <MyClass src1={Bdour} alt1="bdour"
     src="https://avatars3.githubusercontent.com/u/71769659?s=400&u=f79c2bdf655b094836b60d58a15f4a478631e827&v=4" alt="taima"
      name="Taima Al-Foakaha"
      place="Amman-Jordan" disc="Achieved my biggest dreams when I caught Bdour drissing his hair."
     facebook="https://www.facebook.com/sarahaleswed" 
     linkedIn="https://www.linkedin.com/in/sarah-eswed/" 
     gitHup="https://github.com/Sarah-Eswed" />


<MyClass src1={Ashraf} alt1="ashraf"
src="https://avatars0.githubusercontent.com/u/71584075?s=400&u=1f2699d33de5e5c2299c21efa4a7b807e5341923&v=4" alt="ashraf" name="Ashraf Al jabari"
      place="Amman-Jordan" disc="Mr cool room. Gave me trust issues."
     facebook="https://www.facebook.com/sarahaleswed" 
     linkedIn="https://www.linkedin.com/in/sarah-eswed/" 
     gitHup="https://github.com/Sarah-Eswed" />
   
   <MyClass src1="https://i.ytimg.com/vi/JVACtZPgpqU/maxresdefault.jpg" alt1="hacker"
   src="https://avatars3.githubusercontent.com/u/60710271?s=400&u=4beabb3ede0403226fde0a59fbc995c15fbaf6c3&v=4" alt="Dana" name="Dana Toughoj"
   place="Amman-Jordan" disc="Hacked Among Us game, to practice my serial kiling."
   facebook="https://www.facebook.com/sarahaleswed" 
     linkedIn="https://www.linkedin.com/in/sarah-eswed/" 
     gitHup="https://github.com/Sarah-Eswed" />
   
   <MyClass src1="https://imgix.bustle.com/uploads/image/2020/10/22/0a16d52f-7d92-4f2b-b1f9-116600a2958d-maxresdefault-1.jpg" alt1="killer"
    src="https://avatars2.githubusercontent.com/u/71769566?s=400&u=c066c010c2e4eb481f2d0ef22fd736ca9150ed34&v=4" alt="hala" name="Hala Hyasat"
      place="Amman-Jordan" disc="I can teach you how to not trusr anybody, ask Sarah."
     facebook="https://www.facebook.com/sarahaleswed" 
     linkedIn="https://www.linkedin.com/in/sarah-eswed/" 
     gitHup="https://github.com/Sarah-Eswed" />
   
   <MyClass src1="https://cdn.vox-cdn.com/thumbor/VVJtBHW0AYyKm3MJeIGrGtGQFw8=/0x0:1915x1079/1200x800/filters:focal(805x387:1111x693)/cdn.vox-cdn.com/uploads/chorus_image/image/67602394/3234xPs.0.png" alt1="ejected"
   src="https://avatars2.githubusercontent.com/u/71763834?s=400&u=bb4701d623646c804f4af520e18d45eb97be618d&v=4" alt="waed" name="Waed Dawaghreh"
      place="Amman-Jordan" disc="I get ejected so often the now I think that space is my home."
     facebook="https://www.facebook.com/sarahaleswed" 
     linkedIn="https://www.linkedin.com/in/sarah-eswed/" 
     gitHup="https://github.com/Sarah-Eswed" />
   
    </div>


  );
}

export default App;
