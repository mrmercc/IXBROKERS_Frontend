# IXBROKERS Frontend

#### Web Public Area Frontend List
 - [01_Home_Page](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/01_Home_Page.html)
 - [11_Account_Open_Demo](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/11_Account_Open_Demo.html)
 - [12_Account_Open_Live](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/12_Account_Open_Live.html)
 - [13_Account_Types](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/13_Account_Types.html)
 - [21_Products_Forex](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/21_Products_Forex.html)
 - [22_Products_Indices](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/22_Products_Indices.html)
 - [23_Products_CFD](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/23_Products_CFD.html)
 - [24_Products_Stocks](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/24_Products_Stocks.html)
 - [25_Products_Crypto](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/25_Products_Crypto.html)
 - [26_Products_Commodities](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/26_Products_Commodities.html)
 - [31_Platforms_MT4_Desktop](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/31_Platforms_MT4_Desktop.html)
 - [32_Platforms_MT4_Web](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/32_Platforms_MT4_Web.html)
 - [33_Platforms_MT4_Mobile](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/33_Platforms_MT4_Mobile.html)
 - [41_Platforms_MT5_Desktop](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/41_Platforms_MT5_Desktop.html)
 - [42_Platforms_MT5_Web](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/42_Platforms_MT5_Web.html)
 - [43_Platforms_MT5_Mobile](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/43_Platforms_MT5_Mobile.html)
 - [71_Partnership_Affiliate_IB](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/71_Partnership_Affiliate_IB.html)
 - [72_Partnership_Affiliate_Partner](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/72_Partnership_Affiliate_Partner.html)
 - [81_Company](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/81_Company.html)
 - [91_Legal_Terms_And_Conditions](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/91_Legal_Terms_And_Conditions.html)
 - [92_Legal_Privacy_Policy](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/92_Legal_Privacy_Policy.html)
 - [93_Legal_Cookie_Policy](https://orcunkilicaslan.github.io/IXBROKERS_Frontend/html/93_Legal_Cookie_Policy.html)
   

# NodeJS Kurulumu
  
### NodeJS Kurulumu  
Öncelikle **npm** paket yöneticimizin olması lazım, yoksa [NodeJS](https://nodejs.org/) ‘in resmi sitesi olan [nodejs.org](https://nodejs.org/en/download/)’tan NodeJS’i bilgisayarımıza yüklememiz gerek.  Yüklemeyi yaptıktan sonra _terminal_ yada _command prompt’_a  
  
     npm install --global gulp-cli  

yazmamız gerekmektedir. Bu sayade Gulp’un cli(Command Line Interface)sini bilgisayarımıza yüklemiş olacağız, bu bize Gulp’u terminalimizde **gulp** komutunu (command) kullanmamızı sağlıcaktır. Bu işlemi de yaptıktan sonra Gulp görevleri yazmaya başlayalım.  
  
  
#### Projeyi PC'ye İndirme  
Komut Satırına Aşağıdaki Kodu Yazın  

     git clone https://github.com/orcunkilicaslan/IXBROKERS_Frontend.git  

#### Projeyi PC'de Çalıştırma  
Komut Satırına Aşağıdaki Kodu Yazın  

     npm install
     npm install -g npm  


Projeyi Derleyecekseniz İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp build --production

Projede Çalışacaksanız İse Komut Satırına Aşağıdaki Kodu Yazın  

     gulp devel  