import React from 'react'

// import components yang mau dipakai
// import Header from './components/header'
import Footer from './components/footer'

class App extends React.Component {
    // NOTE
    // MANIPULATE STATE (UPDATE STATE)
    klik = () => {
        this.setState({ nama: 'mariah' })
    }


    // NOTE
    // STATE - LOCAL STATE
    constructor(props) {
        super(props)
        this.state = {
            nama: {
                depan: 'andi',
                tengah: 'budi',
                belakang: 'santoso',
            },
            usia: 21,
            count: 0,
            masakan: ['rendang', 'nasi goreng']
        }
    }

    // NOTE
    // HANDLING EVENTS
    // CLICK EVENT
    tambah = () => {
        this.setState({ count: this.state.count + 1 })
    }

    kurang = () => {
        this.setState({ count: this.state.count - 1 })
    }

    tampilkan = () => {
        const result = this.state.masakan.map((item, index) => <li key={index}>{index+1}.{item}</li>)
        return result
    }

    tambahkan = () => {
        let input = this.refs.masakan.value
        let tempMasak = [...this.state.masakan]
        tempMasak.push(input)
        this.setState({ masakan: tempMasak })
    }

    // NOTE
    // conditional rendering

    // hitung = (x) =>{
    //     return x*x
    // }

    // fullName = (id) => {
    //     return id.nama + ' ' +id.marga
    // }

    // logIn = (x) => {
    //     if (x) return "Anda Sudah Login"
    //     return "Anda Belum Login"
    // }
    render() {
        // NOTE
        // let nama = 'Boba Fett'
        // let id = {
        //     nama: "Jango",
        //     marga: "Fett"
        // }

        // NOTE
        // RENDERING MULTIPLE COMPONENTS
        // const siswa = ['joey', 'noel', 'joe']
        // const ListSiswa = siswa.map ((item, index) => <li key={index}> {index} : {item}</li>)
        return (
            <div>
                {/* <h1>Hello The Mandalorian!</h1>
                <h1>Hello Baby Yoda {nama}</h1>
                <h1>Hasil = {this.hitung(5)}</h1>
                <h1>Hello, {this.fullName(id)}</h1>
                <h1>Login = {this.logIn(false)}</h1> */}

                {/* NOTE */}
                {/* RENDERING MULTIPLE COMPONENTS */}
                {/* <h1>Daftar Siswa</h1>
                <ul><h1>{ListSiswa}</h1></ul> */}

                {/* CONTOH MANGGIL COMPONENT HEADER.JS & FOOTER.JS*/}
                {/* <Header/>
                <h1>HALO INI CONTOH IMPORT COMPONENT</h1>
                <Footer/> */}

                {/* NOTE */}
                {/* STATE - LOCAL STATE*/}
                {/* <h1>Hello {this.state.nama}</h1>
                <h2>Your age is {this.state.usia}</h2> */}

                {/* NOTE */}
                {/* PROPS => HANYA DARI PARENT KE CHILD*/}
                {/* <Footer isi={'ini props dari footer'}/> */}
                {/* mau ngirim nama andi ke footer */}
                {/* nama kan local state bisa dipake di footer, 
                dikirim ke footer, terus di state di footer pakai PROPS*/}
                {/* <Footer nama={this.state.nama} usia={this.state.usia}/> */}

                {/* NOTE */}
                {/* HANDLING EVENTS */}
                {/* MANIPULATE STATE (UPDATE STATE)*/}
                {/* <h1>SELAMAT DATANG {this.state.nama.belakang}</h1>
                <button onClick={this.klik}>Coba Klik</button> */}

                {/* NOTE */}
                {/* HANDLING EVENTS */}
                {/* CLICK EVENTS */}
                {/* <h1 style={{fontSize:'50px'}}>{this.state.count}</h1>
                <button onClick={this.kurang}>KURANG</button>
                <button onClick={this.tambah}>TAMBAH</button> */}

                {/* YANG DIATAS DALAM ONCLICK FUNC NYA GAPAKE () krn biar pas di klik baru jalan */}
                {/* NOTE */}
                {/* UPDATE STATE EVENT FROM USER INPUT */}
                <h1>DAFTAR MASAKAN</h1>
                    <input ref='masakan' placeholder='input masakan' type='text' />
                <h1>
                    <ul>
                        {this.tampilkan()}
                    </ul>
                </h1>
                <button onClick={this.tambahkan}>KLIK !</button>
            </div>
        )
    }
}

export default App