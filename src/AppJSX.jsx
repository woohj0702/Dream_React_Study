import './App.css';

function AppJSX() {
  const name = '이름';
  const list = ['우유','딸기','바나나','토마토']

  return (
    <>
    <h1 className='orange'>Hello!</h1>
    <h1>Hello!</h1>
    <h1>{`Hello! ${name}`}</h1>
    <ul>
      {
        list.map(item => 
        <li>{item}</li>
        )
      }
    </ul>
    <img 
    style={{ width: '200px', height: '200px' }}
    src="https://images.velog.io/images/sdb016/post/47181c7c-1156-4182-a638-e0ad0b03a3d3/test.png"
    alt="테스트이미지"
    />
    
    </>
    

  );
}

export default AppJSX;
