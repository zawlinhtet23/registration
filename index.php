<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center text-primary">Registration</h3>
            </div>
            <div class="card-body">
                <form action="_actions/add.php" method="post">
                    <div class="row mb-3">
                        <label for="name" class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-1">
                            <select name="gender" id="gender" class="form-select">
                                <option value="U">U</option>
                                <option value="Daw">Daw</option>
                            </select>
                        </div>
                        <div class="col-sm-5">
                        <input type="text" class="form-control" name="name" id="name" placeholder="Enter your name" onkeypress="return validateNameInput(event)">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="numberSelector" class="col-sm-2 col-form-label">NRC_</label>
                        <div class="col-sm-2">
                            <select id="numberSelector" name="number_selector" onchange="updateTownshipCodes()" class="form-select">
                                <option value="select the number">select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option> 
                                <option value="5">5</option>                   
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>                    
                                <option value="10">10</ption>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                            </select>
                        </div>
                        <div class="col-sm-2">
                            <select id="townshipCodeSelector" name="township_code_selector" class="form-select"></select>
                        </div>
                        <div class="col-sm-1">
                            <select id="nrcCitizenLetter" name="nrc_citizen_letter" class="form-select">
                                <option value="(N)">(N)</option>
                                <option value="(F)">(F)</option>
                                <option value="(P)">(P)</option>
                                <option value="(T)">(T)</option>
                            </select>
                        </div>
                        <div class="col-sm-2">
                            <input type="text" id="nrcNumber" name="nrc_number" class="form-control"   oninput="limitNumberLength(this, 6);" onkeypress="return validateNumberInput(event)">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="email" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-4">
                            <input type="email" name="email" id="email" class="form-control" 
                            placeholder="Enter your email."required>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="pa_number" class="col-sm-2 col-form-label">PA Number or ACCA</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="pa_number" name="pa_number"
                            onkeypress="return validatePaNumberInput(event)">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="transaction_id" class="col-sm-2 col-form-label">Transaction No.</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="transaction_id" name="transaction_id">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-12 text-center mt-3">
                            <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o"></script>
</body>
</html>
