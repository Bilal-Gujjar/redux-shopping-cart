import Count from './comp/count';
import Product2 from './comp/product2'
import Product from './comp/product'
import Maincart from './comp/maincart';
import Page from './comp/page';
import Comment from './comp/comment'

function App() {
  return (
    <div style={{alignItem:"center"}}>
      <Maincart/>
      <hr/>
      <Comment/>
      <hr/>
      <Product/>
      <hr/>
      <Count/>
      <hr/>
      <Product2/>
      <hr/>
      <Page/>
 
    </div>
  );
}

export default App;
