import React from 'react';
import { Menu, X, Globe, Shield, Award, Phone, Mail, MapPin, ArrowRight, Star, Truck, Factory, Leaf } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-2" />
              <span className="text-xl font-bold text-gray-800">Serabut Ekspor Mandiri</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Beranda</a>
                <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Tentang Kami</a>
                <a href="#products" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Produk</a>
                <a href="#services" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Layanan</a>
                <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">Kontak</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600">Tentang Kami</a>
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-600">Produk</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-green-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Eksportir <span className="text-green-600">Serabut Kelapa</span> Terpercaya
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Menyediakan serabut kelapa berkualitas tinggi untuk kebutuhan ekspor internasional. Dengan pengalaman bertahun-tahun, kami berkomitmen memberikan produk terbaik untuk mitra bisnis global.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
                  Konsultasi Gratis <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-all">
                  Lihat Produk
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/4505459/pexels-photo-4505459.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Coconut Fiber Production" 
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Negara Tujuan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Ton Per Bulan</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-green-600">Serabut Ekspor Mandiri</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Serabut Ekspor Mandiri adalah perusahaan terdepan dalam industri ekspor serabut kelapa di Indonesia. Didirikan dengan visi menjadi eksportir serabut kelapa terpercaya di tingkat global.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kami mengutamakan kualitas produk dan kepuasan pelanggan melalui proses produksi yang terkontrol dan standar internasional yang ketat.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Award className="h-8 w-8 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Kualitas Terjamin</h3>
                    <p className="text-gray-600">Produk berkualitas internasional</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-8 w-8 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Terpercaya</h3>
                    <p className="text-gray-600">Pengalaman 15+ tahun</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="About Us" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk <span className="text-green-600">Unggulan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai jenis serabut kelapa berkualitas tinggi untuk memenuhi kebutuhan industri global
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://images.pexels.com/photos/5644896/pexels-photo-5644896.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Coconut Fiber Premium" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Serabut Kelapa Premium</h3>
                <p className="text-gray-600 mb-4">Serabut kelapa kualitas premium dengan serat panjang dan kuat, cocok untuk industri otomotif dan furniture.</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Kualitas A+</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Coconut Fiber Standard" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Serabut Kelapa Standard</h3>
                <p className="text-gray-600 mb-4">Serabut kelapa kualitas standard dengan harga kompetitif, ideal untuk industri tekstil dan kerajinan.</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Kualitas A</span>
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <img 
                src="https://images.pexels.com/photos/4505459/pexels-photo-4505459.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Coconut Fiber Processed" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Serabut Kelapa Olahan</h3>
                <p className="text-gray-600 mb-4">Serabut kelapa yang telah diolah khusus sesuai spesifikasi klien untuk kebutuhan industri tertentu.</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">Custom</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-green-600">Profesional</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan ekspor serabut kelapa Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Produksi Custom</h3>
              <p className="text-gray-600">Kami dapat memproduksi serabut kelapa sesuai dengan spesifikasi dan kebutuhan khusus klien.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pengiriman Global</h3>
              <p className="text-gray-600">Jaringan logistik yang kuat memastikan pengiriman tepat waktu ke seluruh dunia.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Konsultasi Ekspor</h3>
              <p className="text-gray-600">Tim ahli kami siap membantu Anda dalam proses ekspor dan dokumentasi internasional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-green-600">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani kebutuhan ekspor serabut kelapa Anda. Konsultasi gratis untuk mitra bisnis potensial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Alamat</h4>
                      <p className="text-gray-600">Jl. Industri Kelapa No. 123<br />Jakarta Selatan, Indonesia 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telepon</h4>
                      <p className="text-gray-600">+62 21 1234 5678</p>
                      <p className="text-gray-600">+62 812 3456 7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-green-600 mr-4 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">info@serabutekspormandiri.com</p>
                      <p className="text-gray-600">export@serabutekspormandiri.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Jam Operasional</h4>
                  <div className="text-gray-600">
                    <p>Senin - Jumat: 08.00 - 17.00 WIB</p>
                    <p>Sabtu: 08.00 - 12.00 WIB</p>
                    <p>Minggu: Tutup</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  </div>
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Perusahaan</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"></textarea>
                </div>
                
                <button className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg mt-6">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Leaf className="h-8 w-8 text-green-500 mr-2" />
                <span className="text-xl font-bold">Serabut Ekspor Mandiri</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Eksportir serabut kelapa terpercaya dengan komitmen memberikan produk berkualitas tinggi untuk pasar global.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">FB</span>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">IG</span>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">LI</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Beranda</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors">Produk</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">Layanan</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak Cepat</h3>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +62 21 1234 5678
                </p>
                <p className="text-gray-300 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@serabutekspormandiri.com
                </p>
                <p className="text-gray-300 flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-1" />
                  Jakarta Selatan, Indonesia
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Serabut Ekspor Mandiri. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;