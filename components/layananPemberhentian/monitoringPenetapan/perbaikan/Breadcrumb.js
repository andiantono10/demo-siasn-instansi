import Link from "next/link";

function Breadcrumb() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Layanan Pemberhentian</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/layananPemberhentian/monitoringPenetapan">
              <a>Monitoring Penetapan</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/layananPemberhentian/monitoringPenetapan/wizardDetail/DetailPenetapan">
              <a>Dokumen Penetapan</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Pengajuan Perbaikan
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;
