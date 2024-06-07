document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const form = event.target;
    const ownerName = form.ownerName.value;
    const contactNumber = form.contactNumber.value;
    const aadhaarNumber = form.aadhaarNumber.value;
    const emailAddress = form.emailAddress.value;
    const address = form.address.value;
    const animalName = form.animalName.value;
    const species = form.species.value;
    const breed = form.breed.value;
    const age = form.age.value;
  
    const qrData = {
      ownerName: ownerName,
      contactNumber: contactNumber,
      aadhaarNumber: aadhaarNumber,
      emailAddress: emailAddress,
      address: address,
      animalName: animalName,
      species: species,
      breed: breed,
      age: age
    };
  
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = ''; // Clear any previous QR code
    const qr = qrcode(0, 'L');
    qr.addData(JSON.stringify(qrData));
    qr.make();
    qrCodeContainer.innerHTML = qr.createImgTag();
  });
  