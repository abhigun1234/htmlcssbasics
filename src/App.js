import logo from './logo.svg';
import './App.css';
import CourseList from './CourseList'

import PostData from './components/PostData';
import MyNewComponent from './components/MyNewComponent';
// import PostList from './components/postList';
import HttpCall from './HttpCall';
import HttpGetCall from './HttpGetCall';

function App() {
  return (
    <div className="App">
   
     {/* <CourseList /> */}
     {/* <HttpCall></HttpCall> */}
     {/* <PostData></PostData> */}
    {/* <MyNewComponent></MyNewComponent> */}
    <HttpGetCall></HttpGetCall>
    </div>
  );
}

export default App;
