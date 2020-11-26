import React from 'react'
import Header from './components/header.js'
import './App.css'

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = { 
      kegiatan: ['Masak', 'Olahraga', 'Tidur']
    }
  }

  renderThead = () => {
    return (
      <thead>
            <tr>
              <th>Activity</th>
              <th>Action</th>
            </tr>
      </thead>
    )
  }

  renderTbody = () => {
    return (
     <tbody>
      {this.state.kegiatan.map((item, index) => {
          return(
                <tr>
                  <td key={item}>{item}</td>
                  <td>
                    <button onClick={() => this.hapus(index)}>DELETE</button>
                  </td>
                </tr>
          )
          })}
      </tbody>
    );
  };

  tambah = () => {
    let input = this.refs.aktifitas.value;
    let tempList = [...this.state.kegiatan];
    tempList.push(input);
    this.setState({kegiatan: tempList});
    this.refs.aktifitas.value = "";
  }

  hapus = (index) => {
    let tempList = [...this.state.kegiatan]
    tempList.splice(index, 1)
    this.setState({kegiatan: tempList})
  }


  render () {
    return (
      <div className='divTabel'>
        <Header/>
        <div className='inputnya'>
        <input ref='aktifitas' placeholder='Input your schedule' type='text' className='inputList'/>
        <button onClick={this.tambah} className="btnAdd">ADD</button>
        </div>

        <table className='tabelIsi'>
          {this.renderThead()}
          {this.renderTbody()}
          {/* <thead> */}
            {/* <tr>
              <th>Activity</th>
              <th>Action</th>
            </tr> */}
          {/* </thead> */}

          {/* <tbody> */}
              {/* {this.tampil()} */}
          {/* </tbody> */}
        </table>
      </div>
    )
  }
}

export default App;
