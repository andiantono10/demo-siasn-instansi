import Link from "next/link";

function Breadcrumb() {
  return (
    <>
     <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Layanan Pengadaan</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Buat Usulan Pengadaan
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;
