import style from '../styles/result.module.scss'
import logo from '../assets/logo.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Formingredients = () => {

    return (
        <section className={style.result}>
            <div className={style.logo__container}><img alt="logo" src={logo}></img></div>
            <h1>Here is the result! Enjoy...</h1>
            <div className={style.result__container}>
                <div>
                    <h1>Ayam Woku Manado</h1>
                    <p>Bahan-bahan:</p>
                    <p>1 Ekor Ayam Kampung (potong 12)--2 Buah Jeruk Nipis--2 Sdm Garam--3 Ruas Kunyit--7 Bawang Merah--7 Bawang Putih--10 Cabe Merah--10 Cabe Rawit Merah (sesuai selera)--3 Butir Kemiri--2 Batang Sereh--2 Lembar Daun Salam--2 Ikat Daun Kemangi--Penyedap Rasa--1 1/2 Gelas Air--</p>
                    <p>Cara memasak:</p>
                    <p>Cuci bersih ayam dan tiriskan. Lalu peras jeruk nipis (kalo gak ada jeruk nipis bisa pake cuka) dan beri garam. Aduk hingga merata dan diamkan selama 5 menit, biar ayam gak bau amis.--Goreng ayam tersebut setengah matang, lalu tiriskan--Haluskan bumbu menggunakan blender. Bawang merah, bawang putih, cabe merah, cabe rawit, kemiri dan kunyit. Oh iya kasih minyak sedikit yaa biar bisa di blender. Untuk sereh nya di geprek aja terus di buat simpul.--Setelah bumbu di haluskan barulah di tumis. Jangan lupa sereh dan daun salamnya juga ikut di tumis. Di tumis sampai berubah warna ya 👌--Masukan ayam yang sudah di goreng setengah matang ke dalam bumbu yang sudah di tumis, dan diamkan 5 menit dulu. Biar bumbu meresap. Lalu tuangkan 1 1/2 Gelas air. Lalu tambahkan penyedap rasa (saya 3 Sdt, tapi sesuai selera ya) koreksi rasa dan Biar kan sampai mendidih--Setelah masakan mendidih, lalu masukan daun kemangi yang sudah di potong potong. Masak lagi sekitar 10 menit. And taraaaaaaaaaaaaaa..... jadi deh Ayam Woku Manadonya.--Oh iyaa kalo mau di tambahkan potongan tomat merah juga bisa ko. Sesuai selera aja yaa buibuuuu 👌👌👌--</p>
                </div>
                <div>
                    <h1>Ayam goreng tulang lunak</h1>
                    <p>Bahan-bahan:</p>
                    <p>1 kg ayam (dipotong sesuai selera jangan kecil2 ya)--2 batang serai (memarkan)--4 lembar daun jeruk--7 butir bawang putih (haluskan)--1 sdm ketumbar (haluskan)--3 ruas jari Laos (haluskan)--3 ruas jari kunyit (haluskan)--2 butir kemiri (haluskan)--secukupnya Garam--Secukupnya Air (tuk ukep ayam)--Secukupnya Minyak goreng--</p>
                    <p>Cara memasak:</p>
                    <p>Haluskan bumbu2nya (BaPut, ketumbar, kemiri, kunyit, Laos, garam) hingga halus, sisihkan--Campur kan bumbu halus tadi dengan ayam yg sudah dicuci bersih dan sudah dipotong didalam panci presto. Uleni sampai tercampur rata.--Tambahkan air hingga ayam tenggelam semua. Masukkan serai dan daun jeruk nya kedalam rendaman ayam. Tutup panci presto rebus/ ukep presto sampai kurleb 45 menit. Dengan api sedang.--Setelah proses ukep presto selesai, tunggu suhu dingin ruang. Lalu goreng ayam dengan minyak goreng api sedang sampai ayam berwarna kecoklatan.--Matang dan sajikan ayam selagi hangat bersama nasi putih, sambal dgn perasan jeruk nipis, lalapan.--</p>  </div>
                <div>
                    <h1>Gurame Saus Padang</h1>
                    <p>Bahan-bahan:</p>
                    <p>Bahan utama:--1 ekor gurame--Bumbu untuk saus:--4 siung bawang putih (cincang halus)--3 siung bawang merah (cincang halus)--15 bh cabe merah (giling) banyaknya cabe sesuai selera ya😊--7 buah cabe rawit iris tipis (sesuai selera)--1/2 bawang bombang iris--Saus tiram--Saus tomat--Garam--Gula--Lada--1 bh wortel iris tipis memanjang (opsional)--1 buah tomat potong dadu (opsional)--1 batang irisan daun bawang--1 ruas jahe ukuran kecil iris tipis--Tepung maizena--250 ml air--Bumbu untuk menggoreng ikan :--Tepung beras--Tepung terigu--Garam--Jeruk nipis/ lemon--Minyak sayur--</p>
                    <p>Cara memasak:</p>
                    <p>Cuci bersih ikan gurame yang akan dimasak. Setelah itu lumuri ikan dengan air perasan jeruk nipis/lemon diamkan beberapa menit untuk menghilangkan bau amisnya--Campur tepung terigu,tepung beras dan garam menjadi satu,kemudian lumuri ikan dengan tepung tersebut lalu goreng hingga matang lalu tiriskan. Pastikan minyak yang digunakan sudah panas ya biar ikannya tidak lengket😊.--Tumis bawang merah bawang putih hingga harum,kemudian masukan cabe yang sudah giling, aduk rata--Tambahkan bawang bombay,saus tiram saus tomat dan jahe, aduk sebentar lalu tambahkan 250ml air--Kemudian tambahkan garam dan gula sesuai selera.--Masukkan irisan cabe rawit dan daun bawang dan tomat. Aduk rata. Kemudian tambahkan larutan maizena agar saus mengental--Jika tidak ada tepung maizena. Diamkan beberapa menit hingga kandungan air menyusut dan saus terlihat mengental--Tes rasa. Jika sudah pas. Sajikan dan gurame saus padang siap disantap!😊--</p>
                </div>
                <div>
                    <h1>Ikan Kembung Bakar Teflon</h1>
                    <p>Bahan-bahan:</p>
                    <p>1/2 kg ikan kembung sate, bersihkan--1 buah jeruk sate/jeruk kunci--1 sdm garam halus--2 sdt lada bubuk--1 sdm ketumbar bubuk--</p>
                    <p>Cara memasak:</p>
                    <p>Kucuri ikan dengan jeruk, diamkan 5 menit--Lumuri ikan dg garam, lada dan ketumbar bubuk, simpan d kulkas sekitar 30 menit--Bakar d atas teflon yg d olesi mentega/ butter tipis dengan api yg kecil--Balik untuk membakar kedua bagian ikan.--Sajikan dengan cocolan sambal kecap--</p>
                </div>
                <div>
                    <h1>Beef Teriyaki</h1>
                    <p>Bahan-bahan:</p>
                    <p>250 gr daging sapi--1 siung bawang bombai--5 siung bawang putih--1 sachet saus teriyaki (sy pk yg saor*, bsa diganti saus tiram)--1 sdm kecap manis--secukupnya garam--secukupnya lada--secukupnya gula--secukupnya penyedap rasa--</p>
                    <p>Cara memasak:</p>
                    <p>Potong kecil-kecil memanjang daging sapi, lalu cuci bersih--Tambahkan garam dan lada diamkan selama kurleb 15 menit--Iris bawang bombai dan bawang putih--Tumis bawang bombai dan bawang putih, setelah harum masukkan daging--Tumis daging sebentar lalu tambahkan saus teriyaki, kecap manis, garam, lada, gula dan penyedap rasa, beri air sedikit--Tutup wajannya agar panasnya merata--Tunggu sampai daging matang, lalu garnish sesuai selera--Beef teriyaki siap untuk disantap--</p>
                </div>
                <div>
                    <h1>Rendang Sapi</h1>
                    <p>Bahan-bahan:</p>
                    <p>1 kg daging sapi--4 butir kelapa untuk 2L santan kental--Bumbu dihaluskan :--200 gram Cabe merah--1/2 cm Jahe--2 sdm ketumbar sangrai--10 butir kapulaga--10 butir cengkeh--2 butir bunga lawang--1 buah biji pala--13 butir bawang merah--7 butir bawang putih--25 buah cabe rawit (jika suka pedas)--3 cm lengkuas dipipihkan--2 buah serai dipipihkan--3 lembar daun jeruk--3 lembar daun salam--2 lembar daun kunyit--1/2 sdm garam (tambahkan jika kurang asin)--1 sdt kaldu bubuk (optional)--</p>
                    <p>Cara memasak:</p>
                    <p>Potong daging berlawanan dari seratnya--Peras santan dari 4 butir kelapa tua menjadi 2 liter--Haluskan bumbu--Tuang santan dan bumbu ke dalam wajan anti lengket, masak hingga mendidih--Kemudian masukkan daging, garam dan kaldu. Masak dengan api kecil sambil sesekali di aduk agar tidak gosong--Sampai tahap ini dinamakan kalio, teruskan memasak hingga daging mulai mengering dan kehitaman--Rendang siap dinikmati--</p>
                </div>

            </div>
            <Link to="/"><button>Try another recommendation</button></Link>
        </section >
    )
}

export default Formingredients;