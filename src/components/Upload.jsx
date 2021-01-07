import React from "react";

function Upload() {
  return (
    <div className="upload">
      <div class="container">
            <h1 class="font-weight-light">Upload</h1>
<form action="http://a82150d.online-server.cloud:8080/uploader" method="POST" enctype="multipart/form-data">
	<input type="text" name="title" placeholder="Title" className="Text-input"/>
	<input type="text" name="author" placeholder="Author" className="Text-input" /><br/>
        <textarea rows="4" cols="50" name="description" placeholder="Enter a description ..." className="Text-input" /><br/>
        <input type="number" placeholder="Latitude" step="any" className="Text-input"/>
        <input type="number" placeholder="Longitude" step="any" className="Text-input"/><br/>
        <input type="file" name="file" />
        <select name="res_type">
	        <option value="video">Video</option>
	        <option value="text">Text</option>
        	<option value="image">Image</option>
           	<option value="other">Other</option>
        </select><br/><br/>
        <input type="submit" value="Submit" />
</form>
    </div>
    </div>
  );
}

export default Upload;
