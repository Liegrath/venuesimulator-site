# venuesimulator.com — oyunun sitesi ve geliştirme günlüğü

Bu depo **https://venuesimulator.com** sitesinin kaynağıdır. Oyunun kodu burada değil; oyun gizli
`Liegrath/venue-simulator` deposunda. Bu depo **herkese açık**: buraya konan her şeyi herkes görebilir.
Gizli not, şifre, oyun kodu koyma.

Site şunlardan oluşur:

| Sayfa | Adres | Dosya |
|---|---|---|
| Ana sayfa (oyun tanıtımı, ekran görüntüleri, Steam düğmesi) | `/` | `src/index.njk` |
| Günlük listesi (Devlog) | `/blog/` | `src/blog/index.njk` |
| Yazılar | `/blog/yazi-adi/` | `src/blog/posts/*.md` |
| RSS akışı | `/feed.xml` | `src/feed.njk` |

**Nasıl çalışır:** Yazılar Markdown denen düz metin dosyalarıdır. GitHub'da bir dosya ekleyip
"Commit" dediğinde GitHub siteyi kendisi yeniden kurar ve 1–2 dakika içinde yayına alır. Bilgisayarına
hiçbir şey kurman gerekmez; her şey tarayıcıdan, github.com'dan yapılır.

---

## 1. Yeni yazı ekleme (her seferinde)

1. Tarayıcıda **https://github.com/Liegrath/venuesimulator-site** adresini aç (GitHub'a giriş yapmış ol).
2. Dosya listesinde sırayla **`src`** → **`blog`** → **`posts`** klasörüne tıkla.
   Burada `2026-10-28-hello-venue-simulator.md` gibi yazılar göreceksin.
3. Sağ üstteki **Add file** düğmesine, açılan menüde **Create new file**'a tıkla.
4. Üstteki **Name your file...** kutusuna dosya adını yaz. Kural:
   **`YIL-AY-GÜN-kisa-ingilizce-baslik.md`**, örnek: `2026-11-05-power-and-water.md`
   - Yalnız küçük harf, rakam ve tire (`-`). Türkçe harf, boşluk, büyük harf kullanma.
   - Baştaki tarih yazının tarihi olur ve sitede görünmez; tarihten sonrası adres olur:
     `venuesimulator.com/blog/power-and-water/`
5. Alttaki büyük kutuya şu kalıbı yapıştır ve doldur:

   ```
   ---
   title: Power and water are in
   description: Cables, generators and the first water pipes.
   ---

   Buraya yazının ilk paragrafı gelir.

   ## Ara başlık

   Bir paragraf daha.
   ```

   - En üstteki iki `---` çizgisi arası yazının **künyesi**dir. `title` başlık, `description` listede
     görünen tek cümlelik özet. İkisini de yaz; iki nokta üst üsteden (`:`) sonra bir boşluk bırak.
   - Başlıkta iki nokta üst üste (`:`) kullanacaksan başlığı tırnağa al: `title: "Devlog #2: Water"`
6. Sağ üstteki yeşil **Commit changes...** düğmesine tıkla. Açılan pencerede yine yeşil
   **Commit changes**'a tıkla (alttaki seçenek "Commit directly to the main branch" seçili kalsın).
7. 1–2 dakika bekle, sonra **https://venuesimulator.com/blog/** sayfasını yenile. Yazın en üstte.

**Yayımlandı mı?** Depo sayfasında üstteki **Actions** sekmesine tıkla. En üstteki satırın solunda:
sarı daire = hâlâ kuruluyor, yeşil tik = yayında, kırmızı çarpı = bir hata var (bkz. bölüm 6).

### Taslak (yayımlamadan saklamak)

Künyeye `draft: true` satırı eklersen yazı sitede görünmez:

```
---
title: Yarım kalan yazı
description: ...
draft: true
---
```

Yayımlamak istediğinde o satırı sil ve kaydet.

### Otomatik günlük taslaklar

Her gece **23:30**'da Claude (Claude uygulamasındaki "Günlük devlog taslağı" zamanlanmış görevi) o gün oyuna
eklenenleri (ana sürüme birleştirilen işleri) okur ve **senin ağzından, İngilizce** bir yazı taslağı hazırlar.
O gün oyunda değişiklik yoksa yazı yazılmaz. Uygulama o saatte kapalıysa görev, uygulama açılınca çalışır.

Taslak `draft: true` ile gelir: depoda durur ama **sitede görünmez**. (Depo herkese açık olduğu için taslak
github.com'da okunabilir; sitede ise çıkmaz.) Claude uygulamasında bildirim görürsün.

Yayımlamak için iki yol:
- **Kendin:** depoda `src/blog/posts` → yeni yazıya tıkla → kalem simgesi → `draft: true` satırını sil
  (istersen metni de düzelt) → **Commit changes...** → **Commit changes**.
- **Claude'a söyle:** "dünkü devlog taslağını yayınla" ya da "şu cümleyi değiştirip yayınla".

Beğenmediğin taslağı silebilirsin (bölüm 3). Görevi durdurmak ya da saatini değiştirmek için Claude
uygulamasında soldaki **Scheduled** (Zamanlanmış görevler) listesinden görevi aç.

## 2. Yazıya resim koyma

1. Önce resmi yükle: depoda **`src`** → **`blog`** → **`images`** klasörüne gir.
2. **Add file** → **Upload files**. Resmi sürükleyip bırak (ya da "choose your files" ile seç).
3. Yeşil **Commit changes**'a tıkla.
4. Yazının içine, resmin görünmesini istediğin yere şunu yaz:

   ```
   ![Resimde ne olduğunu anlatan kısa İngilizce cümle](/blog/images/resmin-dosya-adi.jpg)
   ```

   Köşeli parantez içindeki açıklama görme engelli okurlar ve arama motorları içindir.

İpuçları:
- Dosya adında da yalnız küçük harf, rakam ve tire kullan: `first-water-pipe.jpg`.
- Oyunun `--shots` görüntüleri 2–4 MB'lık PNG'ler; site yavaş açılmasın diye 1 MB altı tercih et.
  Kolay yol: resmi Windows **Fotoğraflar**'da aç → üstte **…** → **Resmi yeniden boyutlandır** →
  genişlik 1600 → JPG olarak kaydet. (İstersen bana "şu görüntüleri siteye hazırla" de, ben yaparım.)
- Yazının en üstünde ve sosyal medyada paylaşıldığında kapak resmi görünsün istersen künyeye ekle:
  `image: /blog/images/resmin-dosya-adi.jpg`

## 3. Var olan yazıyı düzeltme ya da silme

- **Düzeltme:** `src/blog/posts` içinde yazıya tıkla → sağ üstteki **kalem** simgesi (Edit this file) →
  değiştir → **Commit changes...** → **Commit changes**.
- **Silme:** yazıyı aç → sağ üstteki **…** menüsü → **Delete file** → **Commit changes**.
  (GitHub geçmişi tuttuğu için yanlışlıkla silinen yazı geri getirilebilir; bana söylemen yeter.)

## 4. Markdown kopya kâğıdı

| Yazdığın | Sitede görünen |
|---|---|
| `**kalın**` | **kalın** |
| `*eğik*` | *eğik* |
| `## Ara başlık` | büyük ara başlık |
| `### Küçük başlık` | küçük ara başlık |
| `- madde` (her satır başına) | madde işaretli liste |
| `1. madde` | numaralı liste |
| `[bağlantı yazısı](https://adres.com)` | tıklanabilir bağlantı |
| `> alıntı` | yanında mavi çizgi olan alıntı kutusu |
| `---` (tek başına bir satırda) | yatay ayırıcı çizgi |
| boş satır | yeni paragraf |

Paragraflar arasında **boş bir satır** bırak; tek Enter yeni paragraf açmaz.

Bir YouTube fragmanı eklemek için YouTube'da videonun altındaki **Paylaş** → **Yerleştir**'e tıkla,
çıkan `<iframe ...></iframe>` kodunu kopyalayıp yazının içine kendi satırına yapıştır.

## 5. Steam sayfası açılınca

Steam sayfan hazır olduğunda "Steam page soon" yazan soluk düğmeler kendiliğinden
**"Wishlist on Steam"** düğmesine dönüşsün diye tek bir satırı değiştirmen yeter:

1. Depoda **`src`** → **`_data`** → **`site.json`** dosyasını aç, kalem simgesine tıkla.
2. `"steamUrl": "",` satırındaki iki tırnağın arasına Steam sayfanın adresini yapıştır:
   `"steamUrl": "https://store.steampowered.com/app/1234560/Venue_Simulator/",`
3. **Commit changes...** → **Commit changes**.

Aynı dosyada sitenin altında görünen tanıtım cümlesi (`tagline`) de var; onu da buradan değiştirebilirsin.
Tırnakları ve satır sonundaki virgülleri silme.

## 6. Bir şey ters giderse

- **Actions'ta kırmızı çarpı:** en sık sebep yazının künyesindeki bir yazım hatasıdır (eksik `---`,
  `title:`'dan sonra boşluk yok, başlıkta tırnaksız `:`). Son değiştirdiğin dosyayı aç, kalıpla
  karşılaştır. Çözemezsen Claude'a "sitede Actions kırmızı" de; hata kaydını o okur.
- Kırmızı çarpı varken site **bozulmaz**: son çalışan sürüm yayında kalır, yalnız yeni yazı görünmez.
- **Yazı göründü ama resim yok:** dosya adını büyük/küçük harf dahil birebir aynı yazdığını kontrol et
  (`Photo.JPG` ile `photo.jpg` farklıdır).

---

## Kurulum bilgisi (bir kez yapıldı; yeniden gerekirse)

### GitHub Pages
- Depo: `Liegrath/venuesimulator-site` (herkese açık; ücretsiz GitHub Pages yalnız açık depodan yayın yapar).
- Depo → **Settings** → soldan **Pages**:
  - **Source:** "GitHub Actions" (site `.github/workflows/deploy.yml` ile kurulur).
  - **Custom domain:** `venuesimulator.com` → **Save**. Yeşil "DNS check successful" çıkınca
    **Enforce HTTPS** kutusunu işaretle.
- `src/CNAME` dosyası alan adını tutar; silme.

### Alan adı (reg.com.tr) DNS kayıtları
reg.com.tr paneli → alan adları → `venuesimulator.com` → DNS yönetimi. Önceden var olan `@` (ya da boş ad)
için A kayıtlarını ve `www` kaydını sil, sonra şunları ekle:

| Tür | Ad / Host | Değer | TTL |
|---|---|---|---|
| A | `@` | `185.199.108.153` | varsayılan |
| A | `@` | `185.199.109.153` | varsayılan |
| A | `@` | `185.199.110.153` | varsayılan |
| A | `@` | `185.199.111.153` | varsayılan |
| CNAME | `www` | `liegrath.github.io.` | varsayılan |

### Yerelde çalıştırmak (yalnız Claude için)
Node.js gerekir. `npm install`, sonra `npm start` → http://localhost:8080. Derleme: `npm run build` (çıktı `_site/`).
Site üreticisi [Eleventy](https://www.11ty.dev/) 3. Sayfa kalıpları `src/_includes/`, stil `src/assets/css/site.css`
(renkler oyunun açık arayüzünden: `game/src/UI/UiTheme.cs` `Pal`), yazı tipi oyunun Blueprint Sketch fontu.
Ekran görüntüleri oyun deposundaki `game/screenshots/`'tan 1600 px genişliğe küçültülüp JPG yapıldı.
