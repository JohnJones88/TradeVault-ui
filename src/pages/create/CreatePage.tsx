import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { storage } from "c:/Users/19196/Desktop/TradeVault-ui/src/firebase"
import { getDownloadURL, ref, uploadBytes, } from "firebase/storage";
import { v4 } from "uuid";





function CreatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setAge] = useState('')
  const [condition, setCondition] = useState('')
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const imagesListRef = ref(storage, "images/");
  const uploadImage = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload)
    const url = await getDownloadURL(snapshot.ref);
    setImageUrl(url)
  };


  return (
    <div className="container pt-4">
    
      <div className="CreatePage"><input
          type="file"
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }} />
        <button onClick={uploadImage}>Upload Image</button>
        <img src={imageUrl} />
        </div>


      <div className="row mb-3">
        <div className="col-4">
          <label className="form-label">Name</label>
          <input className="form-control" type="text" placeholder="Enter Collectable name" value={name} onChange={(e) => { setName(e.target.value) }}></input>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows={4} placeholder="Enter Collectable description" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea >
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <label className="form-label">Age</label>
          <input className="form-control" type="number" placeholder="Enter Collectable age" value={age} onChange={(e) => { setAge(e.target.value) }}></input>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-4">
          <Form.Select className="form-control" aria-label="Default select example" value={condition} onChange={(e) => { setCondition(e.target.value) }}>
            <option>Choose the Condition</option>
            <option value="Mint">Mint</option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Poor">Poor</option>
          </Form.Select>
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn-primary" onClick={addCollectable}>Submit</button>
      </div>
    </div>
  );
  function addCollectable() {

    const asyncPostCollectable = async () => {
      const url = process.env.REACT_APP_BASE_URL + '/collectables';

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` },
        body: JSON.stringify({ name: name, description: description, age: age, condition: condition })
      }

      try {

        const response = await fetch(url, options);
        if (response.status === 401) {
          navigate('/')
        }

        const data = await response.json()


        console.log(data);

        navigate(`/view/${data.id}`)
      } catch (error) {
        console.error(error);
      }
    }

    const asyncPutCollectable = async () => {
      const url = process.env.REACT_APP_BASE_URL + `/collectables/${id}`;

      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'authorization': `${localStorage.getItem('profile-token')}` },
        body: JSON.stringify({ name: name, description: description, age: age, condition: condition })
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);

        navigate(`/view/${data.id}`)
      } catch (error) {
        console.error(error);
      }

    }

    if (id) {
      asyncPutCollectable();
    }
    else {
      asyncPostCollectable();
    }
  }
}



export default CreatePage;
