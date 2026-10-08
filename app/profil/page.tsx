import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Profil Desa Sroyo" };

const missions = [
  "Menyelenggarakan pemerintahan desa yang bersih, tertib dan bebas KKN.",
  "Pemerataan pembangunan infrastruktur demi menunjang ekonomi masyarakat.",
  "Peningkatan Pendapatan Asli Desa (PAD) Sroyo melalui pengembangan BUMDES.",
  "Menciptakan inovasi Desa Sroyo guna meningkatkan kreativitas untuk menunjang perekonomian.",
  "Penyelamatan aset-aset desa untuk kemakmuran masyarakat Desa Sroyo.",
  "Menyelenggarakan kegiatan agama, sosial, budaya dan olahraga dalam rangka memperkokoh persatuan bangsa.",
];

const demographics = [
  ["01", "Jumlah Dusun", "6", "Dusun", "Terdiri atas 6 wilayah dusun administratif"],
  ["02", "Rukun Warga", "10", "RW", "Koordinasi kewilayahan tingkat RW"],
  ["03", "Rukun Tetangga", "58", "RT", "Pelayanan warga tingkat RT"],
  ["04", "Jumlah Penduduk", "10.470", "Jiwa", "Data kependudukan tahun 2024"],
  ["05", "Luas Wilayah", "± 715", "Hektare", "Wilayah administratif Desa Sroyo"],
];

const staff = [
  ["EKO MARWANTO, S.Sos.", "SEKRETARIS DESA", "Koordinator Administrasi Desa"],
  ["WAHID MUSTOFA", "KAUR TATA USAHA & UMUM", "Surat, Aset & Arsip Desa"],
  ["BUDI SANTOSO", "KAUR KEUANGAN", "Bendahara & Pengelolaan APBDes"],
  ["NGATMIN", "KAUR PERENCANAAN", "RPJMDes & RKPDes"],
  ["MOH NOER FATONI", "KASI PEMERINTAHAN", "Pembinaan ketertiban, batas desa & data kependudukan"],
  ["SUWARTO", "KASI KESEJAHTERAAN", "Pembangunan infrastruktur, bansos & pembinaan warga"],
  ["DIDIK NUGROHO", "KASI PELAYANAN", "Layanan surat menyurat, nikah, perizinan & keagamaan"],
];

function Footer() {
  return <footer id="kontak"><div className="footerTop"><div className="footerBrand"><Link className="footerIdentity" href="/"><Image src="/figma/crest.png" alt="Lambang Kabupaten Karanganyar" width={40} height={48} /><div className="footerIdentityInfo"><strong>Pemerintah Kota Karanganyar</strong><span>Kecamatan Jaten</span><span>Desa Sroyo</span></div></Link><p>Portal informasi resmi Pemerintah Desa Sroyo untuk pelayanan dan keterbukaan informasi warga.</p><div className="contactDetail"><span>Jl. Raya Solo - Sragen KM 7.5, Desa Sroyo</span><span>Senin - Jumat · 08.00 - 15.00 WIB</span><span>+62 812-3456-7890</span></div></div><div><h4>Navigasi Utama</h4><Link href="/">Beranda</Link><Link href="/profil">Profil Wilayah</Link><a href="#layanan">Layanan Surat Online</a><a href="#demografi">Statistik Kependudukan</a></div><div><h4>Hubungi Kami</h4><a href="mailto:desa-sroyo@karanganyarkab.go.id">desa-sroyo@karanganyarkab.go.id</a><a href="tel:+6281234567890">+62 812-3456-7890</a><a href="#kontak">Pos Pengaduan Warga</a></div></div><div className="footerBottom"><div><p>Terhubung Bersama Kami</p><div className="socialLinks"><a href="https://youtube.com" aria-label="YouTube"><Image className="icon" src="/icon/youtube.svg" alt="" width={18} height={18} /></a><a href="https://instagram.com" aria-label="Instagram"><Image className="icon" src="/icon/instagram.svg" alt="" width={18} height={18} /></a><a href="https://x.com" aria-label="X"><Image className="icon" src="/icon/x.svg" alt="" width={18} height={18} /></a></div></div><small>© 2025 Pemerintah Desa Sroyo, Kecamatan Jaten. Kabupaten Karanganyar. Hak Cipta Dilindungi Undang-Undang.</small></div></footer>;
}

export default function ProfilPage() {
  return <main className="figmaProfile">
    <header className="topbar"><Link className="brand" href="/"><Image src="/figma/crest.png" alt="Lambang Kabupaten Karanganyar" width={48} height={58} priority /><span>Pemerintah Kota Karanganyar<br />Kecamatan Jaten<br />Desa Sroyo</span></Link><nav className="nav" aria-label="Navigasi utama"><Link href="/">Beranda</Link><Link className="active" href="/profil">Profil</Link><a href="#kontak">Kontak</a></nav></header>

    <section className="historyHero"><Image src="/figma/profile-history.png" alt="Pemandangan Desa Sroyo" fill priority sizes="100vw" /><div className="historyShade" /><div className="historyCard"><h1>Sejarah Desa Sroyo</h1><p>Desa Sroyo merupakan salah satu desa di Kecamatan Jaten, Kabupaten Karanganyar. Sejak awal pembentukannya, masyarakat Sroyo tumbuh dalam semangat gotong royong dan kemandirian. Perkembangan desa terus diarahkan untuk memberikan pelayanan yang baik, menjaga nilai budaya, serta meningkatkan kesejahteraan seluruh warga.</p></div></section>

    <section className="vmSection"><h2>Visi</h2><div className="winePanel quote">“Terwujudnya Masyarakat Desa Sroyo yang Beragama dan Berbudaya Menuju Keadilan dan Kesejahteraan Berlandaskan Semangat Gotong Royong.”</div><h2>Misi</h2><div className="winePanel missionPanel"><p>Misi Desa</p><ol>{missions.map((mission) => <li key={mission}>{mission}</li>)}</ol></div></section>

    <section className="profileBlock"><div className="ribbonTitle">Peta Administrasi Desa Sroyo</div><div className="mapFrame"><Image src="/figma/administrative-map.png" alt="Peta administrasi Desa Sroyo" width={1755} height={1240} /></div></section>

    <section className="profileBlock orgBlock"><div className="ribbonTitle">Struktur Organisasi</div><div className="orgCanvas"><div className="orgLine rootLine" /><article className="orgCard chief"><b>Kepala Desa</b><strong>YULIANTO, ST.</strong><span>NIPD: 19780512 201001 1 004</span></article><div className="orgTree">{staff.map(([name, role, detail], index) => <article className={`orgCard staff staff${index}`} key={role}><b>{name}</b><strong>{role}</strong><span>{detail}</span></article>)}</div></div></section>

    <section id="demografi" className="demography"><div className="demographyInner"><h2>Wilayah & Demografi Kependudukan</h2><p className="sectionLead">Data kependudukan Desa Sroyo berdasarkan evaluasi administrasi tahun 2024.</p><h3>Distribusi Berdasarkan Jenis Kelamin</h3><div className="genderCards"><article><p>Penduduk Laki-Laki</p><strong>5.188 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>49,55%</b></div><i><em /></i></article><article><p>Penduduk Perempuan</p><strong>5.282 <small>Jiwa</small></strong><div><span>Persentase Penduduk</span><b>50,45%</b></div><i><em /></i></article></div><h3>Matriks Indikator Kependudukan</h3><p className="sectionLead">Data validasi resmi berdasarkan evaluasi Badan Pusat Statistik & Arsip Tata Pamong Desa Sroyo 2024.</p><div className="tableWrap"><table><thead><tr><th>No</th><th>Indikator Administratif / Demografi</th><th>Nilai Parameter</th><th>Satuan</th><th>Keterangan</th></tr></thead><tbody>{demographics.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>

    <section id="layanan" className="healthSection"><div className="healthInner"><p className="eyebrow">Layanan Publik & Kesehatan</p><h2>Kesehatan dan Kesejahteraan Masyarakat</h2><p className="sectionLead">Cakupan posyandu komunitas, tenaga medis terpadu, dan program pemberdayaan keluarga.</p><div className="healthKpis"><article><b>12</b><span>Posyandu Aktif</span></article><article><b>4</b><span>Tenaga Kesehatan</span></article><article><b>79%</b><span>Cakupan Imunisasi</span></article><article><b>66,13%</b><span>Akseptor KB Aktif</span></article></div><div className="healthCards"><article><h3>Layanan Posyandu & Skrining Komunitas</h3><p>Pelayanan ibu dan anak, pemantauan gizi, serta pemeriksaan kesehatan rutin tersedia melalui jejaring posyandu di setiap dusun.</p><div className="healthProgress"><span>Balita Terpantau</span><b>87%</b><i><em /></i></div></article><article><h3>Program Keluarga Berencana</h3><p>Pelayanan suntik, pil KB, IUD, implan, dan MOW difasilitasi melalui kemitraan bidan desa dan Puskesmas Jaten I.</p><div className="healthProgress"><span>Akseptor KB Aktif</span><b>66,13%</b><i><em /></i></div></article></div></div></section>
    <Footer />
  </main>;
}
