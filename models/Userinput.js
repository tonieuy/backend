import mongoose from "mongoose";

const Dapem = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    nohp:{
        type: String,
        required: true
    },
    nik:{
        type: String,
        required: true
    },
    alamat:{
        type: String,
        required: true
    },
    rt:{
        type: String,
        required: true
    },
    rw:{
        type: String,
        required: true
    },
    kelurahan:{
        type: String,
        required: true
    },
    kecamatan:{
        type: String,
        required: true
    },
    notps:{
        type: String,
        required: true
    },
    keterangan:{
        type: String,
        required: true
    },
    kontributor:{
        type: String,
        required: true
    }
});


// const usera = mongoose.model('usera', {

// })

export default mongoose.model('daftarpemilih', Dapem);
