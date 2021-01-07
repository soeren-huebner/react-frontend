import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <form action="/uploader" method="POST" enctype="multipart/form-data">
         <input type="text" name="title" placeholder="Title" className="Text-input"/><br/>

	 <input type="text" name="author" placeholder="Author" className="Text-input" /><br/>

         <textarea rows="4" cols="50" name="description" placeholder="Enter a description ..." className="Text-input" /><br/>

         <input type="number" placeholder="Latitude" className="Text-input"/>
         <input type="number" placeholder="Longitude" className="Text-input"/><br/>

         <input type="file" name="file" />

         <select name="res_type">
           <option value="video">Video</option>
           <option value="text">Text</option>
           <option value="image">Image</option>
           <option value="other">Other</option>
         </select><br/>
	<br/>

         <input type="submit" value="Submit" />


      </form>
      </header>
    </div>
  );
}

export default App;
