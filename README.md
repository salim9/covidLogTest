<p align="center">
<img src="https://user-images.githubusercontent.com/34637980/104817681-cbc20a80-5833-11eb-84e5-d603e6347ec8.png">
</p>

# **covidLog**

En güncel ve en güvenilir COVID-19 dünya verilerini almak için yapılan bir uygulamadır. 

![home](https://user-images.githubusercontent.com/34637980/104817648-9b7a6c00-5833-11eb-9884-69f3f688eab0.png)

# Mimari

Uygulama **Ionic** üzerinde geliştirilmiştir. **Ionic Forms** kullanılmıştır. Kullanıcı kayıtları Google'ın servisi olan **Firebase** ile saklanmaktadır. Yeni kullanıcı ve şifre sıfırlama fonksiyonları bulunmaktadır.
Yer alan COVID-19 Dünya Tablosu verileri [COVID19 API](https://api.covid19api.com/summary "COVID19-API")'dan HttpClient aracılığıyla uygulamaya aktarılmaktadır.

  ## Mevcut Sayfalar
      Home
      Login
      Password-Reset
      Sign-Up
  
  içerikleri ve isterleri Ekran Görüntüleri başlığı altında mevcuttur.

# Kurulması Gerekenler

**1-** Visual Studio Code

**2-** NodeJS

Node.js'in kurulduğuna emin olduktan sonra;

  Ionic CLI **önceden kurulmuş** ise CMD'ye;
  
      npm uninstall -g ionic
      
      npm install -g @ionic/cli
  
  Eğer **önceden Ionic CLI kurulmamış** ise CMD'ye; 
  
      npm install -g @ionic/cli


# Projeyi Başlatmak

Visual Studio Code açıldıktan sonra;

    $ git clone https://github.com/salim9/covidLogTest.git

    $ cd covidLogTest

    $ npm install --force

    $ ionic serve

Varsayılan tarayıcınızda http://localhost:8100/login adresine giderek covidLog'u başarıyla kullanmaya başlayabilirsiniz.

# Kullanım

Localhost üzerinde başlatılan uygulamada ilk olarak karşımıza **login screen** gelmektedir. Kullanıcının kayıt bilgileri **bulunmalıdır**.
Aksi takdirde uygulamaya giriş yapması **mümkün değildir**. Eğer kullanıcının kaydı **mevcut değilse**, login ekranının altında yer alan **Kayıt Ol**
bağlantısına tıklaması gerekmektedir. Kullanıcı kayıt olduktan sonra Login sayfasından kayıt bilgilerini başarıyla girerse "Güncel COVID-19 Dünya Verileri"
ne erişebilir.
  
  Erişim sağlandıktan sonraki **home** sayfası;
  
  ![home](https://user-images.githubusercontent.com/34637980/104817648-9b7a6c00-5833-11eb-9884-69f3f688eab0.png)

# Ekran Görüntüleri

## Login isterleri

![login](https://user-images.githubusercontent.com/34637980/104817649-9c130280-5833-11eb-97c5-9eeae7759c80.png)

    E-Mail (Your@email.com)
  
    Şifre (en az 6 haneli)
  
## Kayıt Ol isterleri

   ![register](https://user-images.githubusercontent.com/34637980/104817640-99181200-5833-11eb-9194-61a7f1cdc4be.png)
    
    E-Mail (Your@email.com)
  
    Şifre (en az 6 haneli)
  
## Şifremi Unuttum isterleri

![sifre-sifirla](https://user-images.githubusercontent.com/34637980/104817642-99b0a880-5833-11eb-94c3-e8b58f32f21b.png)

    E-Mail (Your@email.com)


## Firebase Kayıtları

![firebase-log](https://user-images.githubusercontent.com/34637980/104817644-9a493f00-5833-11eb-9128-04082e27a7ef.png)

