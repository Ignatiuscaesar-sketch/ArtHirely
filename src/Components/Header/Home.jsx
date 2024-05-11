
import React from 'react'
import './Header.css';
function Home() {
  return (
    <div className='Home'>
      <div className='Welcome'>
      <h2>Welcome to ArtHirely!</h2>
      <p>
         Welcome to Arthirely, where creativity meets innovation.
         We are a dynamic team dedicated to crafting captivating experiences through the power of art and technology.
         At Arthirely, we believe in pushing boundaries, igniting imaginations, and inspiring change.
         With a passion for excellence and a commitment to our craft, we strive to redefine what's possible in the ever-evolving landscape of creativity.
         Join us on our journey as we continue to shape the future of interactive artistry.
         </p>
      </div>

      <div className='Location'>
        <div className='City'>
        <h2>Where to Find us!</h2>
        <p>
        ArtHirely is headquartered in the vibrant heart of Nairobi City, nestled within the bustling streets of Westlands,
        where creativity thrives and innovation knows no bounds.
        Situated amidst a rich tapestry of artistic expression, our team draws inspiration from the dynamic energy of the city, channeling it into every project we undertake. From the eclectic galleries to the trendy coffee shops, Nairobi city provides the perfect backdrop for our mission to revolutionize the freelance art landscape.
        Join us in our journey as we redefine the way the world engages with creativity, one project at a time.
        </p>
        </div>
        <img src='https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D' alt='image'/>
      </div>

      <div className='OurValue'>
        <div className='Mission'>
         <h2>Our Mission</h2>
         <p>
           At ArtHirely, our mission is to empower freelance artists worldwide by providing a platform where their talent can flourish and thrive.
           We believe in creating opportunities for artists to showcase their creativity and skills while connecting them with clients who appreciate and value their work.
           Through our innovative platform, we aim to foster a vibrant community where artists can find meaningful projects, collaborate with like-minded individuals, and build lasting relationships.
           Our commitment extends beyond mere transactions; we're dedicated to nurturing a supportive environment where artists can grow both personally and professionally.
           At ArtHirely, we're not just building a freelancing website; we're cultivating a global network of creativity and inspiration, one project at a time.
           Join us on our mission to redefine the freelance landscape and unleash the full potential of artistic expression.
         </p>
        </div>

        <div className='Vision'>
          <h2>Our Vision</h2>
          <p>
           At ArtHirely, our vision is to revolutionize the way the world perceives and engages with freelance artistry.
           We envision a future where artists are celebrated as essential contributors to society, their craft recognized and valued on par with any other profession.
           Through our platform, we strive to break down barriers and create a level playing field where artists of all backgrounds and styles can thrive.
           We see ArtHirely as not just a marketplace, but a catalyst for change, sparking a renaissance in creative collaboration and innovation.
           Our vision extends beyond mere transactions; it encompasses a broader cultural shift towards embracing and championing the power of artistic expression in all its forms.
           Together, we're paving the way for a future where every artist has the opportunity to make a meaningful impact and leave a lasting legacy.
           Join us as we embark on this transformative journey to redefine the freelance art landscape and shape a brighter, more inclusive tomorrow.
          </p>
        </div>
      </div>

        <div className='Team'>
          <h1>Meet our dynamic team at ArtHirely!!!</h1>
          <div className='Members'>
          <div className='James'>
            <h2>James Mugo!</h2>
            <img src='https://media.istockphoto.com/id/1723893505/photo/close-up-of-male-hand-writing-on-note-book-with-pen-showing-blank-screen-of-laptop-and.jpg?s=612x612&w=0&k=20&c=un66XrEtofof3Q_d6oZrfcdpfyk9LL4uudneN6s4Xxg=' alt='image'/>
            <p>UX/UI Designer.</p>
          </div>
          <div className='Victor'>
            <h2>Victor Wamui!</h2>
            <img src='https://media.istockphoto.com/id/1172618660/photo/few-more-lines-to-be-done.jpg?s=612x612&w=0&k=20&c=jf6CyRrwE5UuX2BUVCdN1dO106zxJQDchnpHONFHdE4=' alt='image'/>
            <p>Program Manager.</p>
          </div>
          <div className='Caesar'>
            <h2>Ignatius Mayaka!</h2>
            <img src='https://media.istockphoto.com/id/1472907632/photo/closeup-image-of-a-woman-working-and-touching-on-laptop-computer-touchpad.jpg?s=612x612&w=0&k=20&c=pgP5mtShhciXLD-jZi4b334YLglS_LrTRX8cGEeX0uk=' alt='image'/>
            <p>Product Designer.</p>
          </div>
          <div className='Stephen'>
            <h2>Stephen Onyango!</h2>
            <img src='https://media.istockphoto.com/id/534627186/photo/pleasant-man-working-on-the-laptop.jpg?s=612x612&w=0&k=20&c=P1l6uRr2vToyCSV0pUsEBkkqsGD8eYJHNChVf2aui4o=' alt='image'/>
            <p>Graphic Designer.</p>
          </div>
          <div className='Fardowsa'>
            <h2>Fardowsa Gedi!</h2>
            <img src='https://media.istockphoto.com/id/1021826988/photo/close-up-of-woman-typing-keyboard-on-laptop-in-coffee-shop-people-and-technology-concept.jpg?s=612x612&w=0&k=20&c=xHatWgRByJOpMvPonsfaIdEaNe7mTP5smbsGTH5xSQc=' alt='image'/>
            <p>Web Developer.</p>
          </div>
          </div>

        </div>
    </div>
  );
}
export default Home;
