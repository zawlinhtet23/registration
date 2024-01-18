var townshipCodes = {
  "1":["HsaBaTa","HsaDaNa","RaBaYa","KaPaTa","PaWaNa","KaMaTa","MaLaNa","AhGaYa","BaMaNa","DaPhaYa","HaPaNa","KaMaNa","KhaBaDa","KhaLaPha","KhaPhaNa","LaGaNa","MaKaNa","MaKaTa","MaKhaBa","MaMaNa","NaMaNa","MaNyaNa","MaSaNa","PaNaDa","PaTaAh","SaLaNa","SaPaBa","TaNaNa","WaMaNa","YaKaNa"],
    "2":["BaLaKha","DaMaSa","LaKaNa","MaSaNa","PhaSaNa","PhaYaSa","YaTaNa","YaThaNa"],
    "3":["RaRaTha","LaThaNa","BaGaLa","KaMaMa","SaKaLa","WaLaMa","BaAhNa","BaThaSa","KaSaKa","KaDaNa","KaKaYa","LaBaNa","MaWaTa","PaKaNa","PhaPaNa","ThaTaKa","ThaTaNa"],
    "4":["HsaMaNa","HaKhaNa","HtaTaLa","KaKhaNa","KaPaLa","MaTaNa","MaTaPa","PaLaWa","PhaLaNa","TaTaNa","TaZaNa","YaKhaDa","YaZaNa"],
    "5":["KhaPaNa","DaHaNa","MaPaLa","HtaPaKha","HsaMaRa","AhTaNa","AhYaTa","BaMaNa","BaTaLa","DaPaYa","HaMaLa","HtaKhaNa","KaBaLa","KaLaHta","KaLaNa","KaLaTa","KaLaWa","KaNaNa","KaMaNa","KhaTaNa","KaThaNa","KhaOoNa","KhaOoTa","LaHaNa","LaYaNa","MaKaNa","MaLaNa","MaMaTa","MaThaNa","NaYaNa","NgaZaNa","PaLaNa","PaSaNa","SaKaNa","SaLaKa","TaSaNa","WaLaNa","YaBaNa","YaMaPa","MaMaNa","MaYaNa","PaLaBa","PhaPaNa","TaMaNa","WaThaNa","YaONa"],
    "6":["KaLaA","PaLaTa","PaKaMa","BaPaNa","HtaWaNa","KaThaNa","KaYaYa","LaLaNa","MaAhNa","MaAhYa","PaLaNa","TaThaYa","YaPhaNa","MaMaNa","KaSaNa","KhaMaKa","MaTaNa","ThaYaKha"],
    "7":["AhPhaNa","DaOoNa","HtaTaPa","KaPaKa","KaTaKha","LaPaTa","MaLaNa","NaTaLa","NyaLaPa","PaKhaNa","PaMaNa","PaTaNa","PhaMaNa","TaNgaNa","ThaNaPa","ThaWaTa","YaKaNa","YaTaNa","ZaKaNa","AhTaNa","KaKaNa","KaWaNa","MaNyaNa","PaKhaTa","PaTaTa","ThaKaNa","WaMaNa","YaTaYa"],
    "8":["MaHtaNa","AhLaNa","HtaLaNa","KaHtaNa","KhaMaNa","MaBaNa","MaLaNa","MaMaNa","MaTaNa","NaMaNa","NgaPhaNa","PaMaNa","PaPhaNa","SaMaNa","SaPaWa","SaTaYa","TaTaKa","YaNaKha","YaSaKa","GaGaNa","KaMaNa","MaKaNa","MaThaNa","PaKhaKa","SaLaNa","SaPhaNa","ThaYaNa"],
    "9":["NgaZaNa","AhMaZa","KaPaTa","KaSaNa","KhaMaSa","LaWaNa","MaHtaLa","MaKaNa","MaLaNa","MaMaNa","MaNaTa","MaTaYa","MaYaMa","MaYaTa","NgaThaYa","NyaONa","PaBaNa","PaMaNa","PaOLa","SaKaNa","SaKaTa","TaKaTa","TaTaOo","ThaPaKa","ThaSaNa","YaMaTha","OoTaTha","ZaYaTha","PaBaTha","DaKhaTha","ZaBaTha","AhMaYa","KhaAhZa","MaHaMa","MaKhaNa","MaNaMa","MaThaNa","NaHtaKa","PaKaKha","PaThaKa","TaKaNa","TaThaNa","WaTaNa"],
    "10":["KhaZaNa","BaLaNa","KaMaYa","KhaSaNa","LaMaNa","MaLaMa","PaMaNa","ThaPhaYa","YaMaNa","KaHtaNa","MaDaNa","ThaHtaNa"],
    "11":["TaPaWa","BaThaTa","GaMaNa","KaPhaNa","KaTaNa","MaAhNa","MaAhTa","MaPaTa","MaONa","MaPaNa","MaTaNa","PaNaKa","PaTaNa","SaTaNa","TaKaNa","ThaTaNa","YaBaNa","YaThaTa","AhMaNa","KaTaLa"],
    "12":["AhLaNa","AhSaNa","BaHaNa","BaTaHta","DaGaMa","DaGaNa","DaGaSa","DaGaTa","DaGaYa","DaLaNa","DaPaNa","HtaTaPa","KaKaKa","KaKhaKa","KaMaNa","KaMaTa","KaMaYa","KaTaNa","KaTaTa","KhaYaNa","LaKaNa","LaMaNa","LaMaTa","LaThaNa","LaThaYa","MaBaNa","MaGaDa","MaGaTa","MaYaKa","OKaMa","OKaTa","PaBaTa","PaZaTa","SaKaKha","SaKaNa","SaKhaNa","TaKaNa","TaMaNa","TaTaNa","TaTaTa","ThaGaKa","ThaKaTa","ThaKhaNa","ThaLaNa","YaKaNa","YaPaTha"],
    "13":["KaTaLa","NaTaRa","KhaLaNa","KaLaDa","PaHsaNa","MaKaHta","PaHsaTa","MaLaTa","PaLaHta","MaYaNa","MaHsaNa","MaHtaNa","AhTaNa","HaMaNa","HaPaNa","HaPaTa","KaHaNa","KaKaNa","KaKhaNa","KaLaHta","KaLaNa","KaLaTa","KaMaNa","KaTaKa","KaTaNa","KaTaTa","KaThaNa","KhaYaHa","LaKaNa","LaKaNa","LaKhaTa","LaLaNa","LaYaNa","MaBaNa","MaHaYa","MaKaNa","MaKaTa","MaKhaNa","MaKhaTa","MaLaNa","MaMaHta","MaMaNa","MaMaTa","MaNaNa","MaNaTa","MaNgaNa","MaPaHta","MaPaNa","MaPaTa","MaPhaNa","MaPhaTa","MaSaNa","MaSaTa","MaHtaTa","MaTaNa","MaTaTa","MaYaHta","MaRaTa","MaRaNa","MaYaTa","NaKhaNa","NaKhaTa","NaMaTa","NaPhaNa","NaHsaNa","NaSaNa","NaTaNa","NyaYaNa","PhaKhaNa","PaLaNa","PaLaTa","PaPaKa","PaTaYa","PaWaNa","PaYaNa","SaSaNa","TaKaNa","TaKhaLa","TaLaNa","TaMaNya","TaTaNa","TaYaNa","ThaNaNa","ThaPaNa","YaNgaNa","YaSaNa"],
    "14":["KaKaHta","AhGaPa","AhMaNh","AhMaTa","BaKaLa","DaDaYa","DaNaPha","HaKaKa","HaThaTa","KaKaTa","KaKaNa","KaKhaNa","KaLaNa","KaPaNa","LaMaNa","LaPaTa","MaAhNa","MaAhPa","MaMaKa","MaMaNa","NgaPaTa","NgaSaNa","NgaThaKha","NgaYaKa","NyaTaNa","PaSaLa","PaTaNa","PaThaNa","PaThaYa","PhaPaNa","ThaPaNa","WaKhaMa","YaKaNa","YaThaYa","ZaLaNa"] 
};

function updateTownshipCodes() {
  var numberSelector = document.getElementById("numberSelector");
  var townshipCodeSelector = document.getElementById("townshipCodeSelector");
  var selectedNumber = numberSelector.value;

  // Clear previous options
  townshipCodeSelector.innerHTML = '';

  if (townshipCodes[selectedNumber]) {
      townshipCodes[selectedNumber].forEach(function(code) {
          var option = document.createElement("option");
          option.value = code;
          option.text = code;
          townshipCodeSelector.appendChild(option);
      });
  } else {
      // Handle case when no number is selected or no codes are available
      var placeholderOption = document.createElement("option");
      placeholderOption.value = '';
      placeholderOption.text = 'Select a number first';
      townshipCodeSelector.appendChild(placeholderOption);
  }
  
  document.getElementById('emailForm').addEventListener('submit', function(event) {
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      if (!emailInput.checkValidity()) {
          event.preventDefault();
          emailError.textContent = 'Please enter a valid email address.';
          emailError.style.display = 'block';
      } else {
          emailError.textContent = '';
          emailError.style.display = 'none';
      }
  });
}


function limitNumberLength(element, maxLength) {
    if (element.value.length > maxLength) {
        element.value = element.value.slice(0, maxLength);
    }

}
function validateNumberLength(element) {
    let inputValue = element.value.trim();

    if (/^\d+$/.test(inputValue) && inputValue.length === 6) {
        // Input is a valid six-digit number
        // You can add additional logic here if needed
    } else {
        // Input is not a valid six-digit number, clear the input
        element.value = '';
        alert('Please enter a six-digit number.');
    }
}
function validateNameInput(e) {
    var key_arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'," "];

    return key_arr.includes(e.key);
}

function validateNumberInput(e) {
    var number_arr = ['0','1','2','3','4','5','6','7','8','9'];

    return number_arr.includes(e.key);
}

function validatePaNumberInput(e) {
    var number_arr = ['0','1','2','3','4','5','6','7','8','9','/','-'];

    return number_arr.includes(e.key);
}