import React from 'react';

const Gnb = React.lazy(() => import('reactAppGnb/App'));
const style = {
  maxWidth: '640px',
  margin: '0 auto',
  padding: '24px'
};

const App = () => {
  return (
    <main style={{...style}}>
      <Gnb />
      <section style={{ marginTop: '36px' }}>
        <h3>Section</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptates iste est expedita, dolor quod. Dolor dolorum, officia quas numquam doloremque praesentium rem repudiandae architecto deleniti eveniet repellat sed enim!</p>
      </section>
    </main>
  )
};

export default App;