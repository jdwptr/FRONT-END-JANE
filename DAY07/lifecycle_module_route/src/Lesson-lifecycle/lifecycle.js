class App extends React.Component {
    constructor () {
      super();
      this.state = {user:'Orang Asing'};
    }
  
    // will update akan terus menerus tereksekusi sesaat sblm ada perubahan (update) state
    // componentWillUpdate () {
    //   console.log('Ini Will Update')
    // }
  
    // // did update akan tereksekusi sesudah ada perubahan (update) pada state
    // componentDidUpdate(){
    //   console.log('Ini Did Update ')
    // }
  
    // // arrow function dlm case ini dipakai agar kita tidak perlu mem-bind function yg ada di dlm class
    // klik = () => {
    //   this.setState ({user: this.refs.nama.value})
    // }
  
    // // will mount akan terpanggil sebelum render pertama kali dijalankan 
    // componentWillMount () {
    //   this.setState({ user: 'Yayan'});
    //   console.log( 'Ini Will Mount ' + this.state.user);
    // }
  
    // // did mount akan terpanggil sekali setelah render dijalankan
    // componentDidMount () {
    //   this.setState({ user: 'Elsa'})
    //   console.log('Ini Did Mount ' + this.state.user);
    // }
  
    // willmount dulu, render, terus didmount, render
  
    // render akan terpanggil ulang kalau ada perubahan state atau props
    render () {
      return (
        <div>
          <h1>Hello {this.state.user}</h1>
          <input ref="nama" type="text" onChange={() => {this.klik()}}/>
        </div>
      )
    }
  }