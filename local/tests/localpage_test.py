from selenium import webdriver
from selenium.webdriver.common import action_chains, keys
from selenium.webdriver.support.ui import Select
import requests

port = "3000"
folder_location = "/Users/Squiddo/github/ID-Management-Project-UI/local/"
things = ['age', 'degree', 'license']

# Set FireFox Profile to automatically download txt files
fxProfile = webdriver.FirefoxProfile();
fxProfile.set_preference("browser.download.folderList",2);
fxProfile.set_preference("browser.download.manager.showWhenStarting",False);
fxProfile.set_preference("browser.download.dir",folder_location+"tests/");
fxProfile.set_preference("browser.helperApps.neverAsk.saveToDisk","text/plain");

# Instantiate the browser
driver = webdriver.Firefox(fxProfile, executable_path=folder_location+'tests/geckodriver')

def test_clientpage(thing="age"):
    """Tests clientpage for either 'age', 'degree', or 'license' encryption"""
    webFile = requests.get('https://unpkg.com/react-trigger-change/dist/react-trigger-change.js')
    driver.execute_script(webFile.text)
    # navigate to homepage
    driver.get('http://localhost:'+port+'/#/')
    # navigate to client localpage
    driver.find_element_by_id('clientpage').click()
    menu = driver.find_element_by_id('client-type')
    value = driver.execute_script('return arguments[0].value;', menu)
    print("Before update, hidden input value = {}".format(value))
    driver.execute_script(webFile.text+'''
        var menu = arguments[0];
        var value = arguments[1];
        menu.value = value;
        menu.change();
    ''', menu, things.index(thing))
    value = driver.execute_script('return arguments[0].value;', menu)
    print("After update, hidden input value = {}".format(value))

test_clientpage("license")

# # Page interactions to set up session; (1) load encryption key
#
#
# # (2) load RSA key
# driver.find_element_by_id('haskeyyes').click()
# driver.find_element_by_id('prv_key_').send_keys(folder_location+"Tests/private_key.txt")
# driver.find_element_by_id('loadprivkey').click()
#
# # (3) add Client address
# driver.find_element_by_id('claddress').send_keys("0x379AD9FB489Cbbdb9Fc62bf4370170667ffB7a11")
#
# # Test 1; test Age tab
# driver.find_element_by_id('showagetab').click()
# driver.find_element_by_id('age').send_keys("18")
# driver.find_element_by_id('agerand').send_keys("cff166104e03c0b029cc1b4fac1401ae46ca799ac104d205bf8d7d7fe7cc17f5")
# driver.find_element_by_id('ageencbtn').click()
# driver.find_element_by_id('ageproofrand').send_keys("fdbd98a2860f17dd9843a8e9ee243f48ef738eff2054aa17245c4d6ab38497cd")
# driver.find_element_by_id('age-doc').send_keys(folder_location+"Tests/age.txt")
# driver.find_element_by_id('approveagebtn').click()
# driver.find_element_by_id('saveagemsgbtn').click()
# assert driver.find_element_by_id('encryptedAge').text == "a6b320a5de67559ac3f89b394c677e909178f1a83f05f0d86e8b0ca68eba8a21"
# assert driver.find_element_by_id('age-doc-encrypted').text == "bbb6e9edb453d22a55c7d70fd56ba7e7c9c89fea45eb7a964f51ec21be0bf8e4"
#
# # Test 2; test Degree tab
# driver.find_element_by_id('showdegtab').click()
# driver.find_element_by_id('degree').send_keys("MA")
# driver.find_element_by_id('degreedes').send_keys("Art and Fashion Design")
# driver.find_element_by_id('degrand').send_keys("d4e8dcb951757b22f0dd5af72a2e8b8a5ca54ce700a2273b8e9834bfeafe92b4, e4f744337aa73cecf726acf7e115081d7e01d1f8fe23c8e6bc136fe28afe5992")
# driver.find_element_by_id('degencbtn').click()
# driver.find_element_by_id('degproofrand').send_keys("001e602399aae0822b1e5b161698643482b7c99568bc271d416e7e423fc8d903")
# driver.find_element_by_id('deg-doc').send_keys(folder_location+"Tests/degree.txt")
# driver.find_element_by_id('approvedegbtn').click()
# driver.find_element_by_id('savedegreemsgbtn').click()
# assert driver.find_element_by_id('encryptedDegree').text == "f3a22b67c110d059eafc50e9b34f6650daac749a134487f2c152bf94086e3fd2,\nf071aa8238736fe5fdd53c75af5f0407ce6760aba55a579faa134e23b941b9aa"
# assert driver.find_element_by_id('deg-doc-encrypted').text == "af71f6e7389705ec70c8dde71e65fedda3fe8cbb59035a539a59280673b80f29"
#
# # Test 3; test License tab
# driver.find_element_by_id('showlictab').click()
# driver.find_element_by_id('license').send_keys("Interorbital 1B")
# driver.find_element_by_id('licensedes').send_keys("Licensed to pilot passenger and freight craft up to 160 kilotons in planetary and solar orbit. Surface and atmospheric operations prohibited.")
# driver.find_element_by_id('date').send_keys("2420-08-31")
# driver.find_element_by_id('licrand').send_keys("f5b380e87176ddac22b12e2fc35b234236285b5185e098522ba2d5dbdcb7cca1, fc27706383394f29016f8d5d6dc85d9eb877001342c43bca0e8e2d836af0bfdc, 82ce91c52565938ab32469bcdc9f49690969bfd3e91577e5b50e96ae78cf2c64")
# driver.find_element_by_id('licencbtn').click()
# driver.find_element_by_id('licproofrand').send_keys("3d4f6d24a352ea4df3d5c31931612873a656aabde5280523074dbf493a401de5")
# driver.find_element_by_id('lic-doc').send_keys(folder_location+"Tests/license.txt")
# driver.find_element_by_id('approvelicbtn').click()
# driver.find_element_by_id('savelicensemsgbtn').click()
# assert driver.find_element_by_id('encryptedLicense').text == "b2c34bb9b09d10d2cc3e73140f08686952d5c4249f0f0537fe790f77a9ea1728,\nece671fe0ab00d053440cf96099aeeaef72e2cd8d949c01bad6b3c82fd9466bd,\ne63bb37bb7556c17f4d8839d3d8284129b81becf6796c6b8a33efd31591ed8b8"
# assert driver.find_element_by_id('lic-doc-encrypted').text == "77afb7ba983324361fc7a97a3347767339e9421c11eeea0cdbc812fe2a17c0ed"
#
# # SERVICE USER TESTS
#
# # Go to Service User Page
#
# driver.get('file://'+folder_location+'localpage/svcuser.html')
#
# # Test 1; test Age tab
# driver.find_element_by_id('showagetab').click()
# driver.find_element_by_id('agerand').send_keys("cff166104e03c0b029cc1b4fac1401ae46ca799ac104d205bf8d7d7fe7cc17f5")
# driver.find_element_by_id('age').send_keys("18")
# driver.find_element_by_id('ageencbtn').click()
# driver.find_element_by_id('ageproofrand').send_keys("fdbd98a2860f17dd9843a8e9ee243f48ef738eff2054aa17245c4d6ab38497cd")
# driver.find_element_by_id('age-doc').send_keys(folder_location+"Tests/age.txt")
# driver.find_element_by_id('age_pubkey').send_keys(folder_location+"Tests/public_key.txt")
# driver.find_element_by_id('age_pubkey_btn').click()
# driver.find_element_by_id('age_message').send_keys(folder_location+"Tests/age_message.txt")
# driver.find_element_by_id('age_message_btn').click()
# driver.find_element_by_id('age_verify_sig_btn').click()
# driver.find_element_by_id('age_encrypt_sig_btn').click()
# assert driver.find_element_by_id('agecrypt').text == "a6b320a5de67559ac3f89b394c677e909178f1a83f05f0d86e8b0ca68eba8a21"
# assert driver.find_element_by_id('age-doc-encrypted').text == "bbb6e9edb453d22a55c7d70fd56ba7e7c9c89fea45eb7a964f51ec21be0bf8e4"
# assert driver.find_element_by_id('age_sig_verify_result').text == 'The Signature Has Been Verified'
# print("Age encrypted approval: " + driver.find_element_by_id('age_encrypted_approval').text)
#
# # Test 2; test Degree tab
# driver.find_element_by_id('showdegtab').click()
# driver.find_element_by_id('degreerand').send_keys("d4e8dcb951757b22f0dd5af72a2e8b8a5ca54ce700a2273b8e9834bfeafe92b4")
# driver.find_element_by_id('degree').send_keys("MA")
# driver.find_element_by_id('degencbtn').click()
# driver.find_element_by_id('degdesrand').send_keys("e4f744337aa73cecf726acf7e115081d7e01d1f8fe23c8e6bc136fe28afe5992")
# driver.find_element_by_id('degdes').send_keys("Art and Fashion Design")
# driver.find_element_by_id('degdesencbtn').click()
# driver.find_element_by_id('degproofrand').send_keys("001e602399aae0822b1e5b161698643482b7c99568bc271d416e7e423fc8d903")
# driver.find_element_by_id('deg-doc').send_keys(folder_location+"Tests/degree.txt")
# driver.find_element_by_id('degree_pubkey').send_keys(folder_location+"Tests/public_key.txt")
# driver.find_element_by_id('degree_pubkey_btn').click()
# driver.find_element_by_id('degree_message').send_keys(folder_location+"Tests/degree_message.txt")
# driver.find_element_by_id('degree_message_btn').click()
# driver.find_element_by_id('degree_verify_sig_btn').click()
# driver.find_element_by_id('degree_encrypt_sig_btn').click()
# assert driver.find_element_by_id('degreecrypt').text == "f3a22b67c110d059eafc50e9b34f6650daac749a134487f2c152bf94086e3fd2"
# assert driver.find_element_by_id('degdescrypt').text == "f071aa8238736fe5fdd53c75af5f0407ce6760aba55a579faa134e23b941b9aa"
# assert driver.find_element_by_id('deg-doc-encrypted').text == "af71f6e7389705ec70c8dde71e65fedda3fe8cbb59035a539a59280673b80f29"
# assert driver.find_element_by_id('degree_sig_verify_result').text == 'The Signature Has Been Verified'
# print("Degree encrypted approval: " + driver.find_element_by_id('degree_encrypted_approval').text)
#
# # Test 3; test License tab
# driver.find_element_by_id('showlictab').click()
# driver.find_element_by_id('licenserand').send_keys("f5b380e87176ddac22b12e2fc35b234236285b5185e098522ba2d5dbdcb7cca1")
# driver.find_element_by_id('license').send_keys("Interorbital 1B")
# driver.find_element_by_id('licencbtn').click()
# driver.find_element_by_id('licdesrand').send_keys("fc27706383394f29016f8d5d6dc85d9eb877001342c43bca0e8e2d836af0bfdc")
# driver.find_element_by_id('licdes').send_keys("Licensed to pilot passenger and freight craft up to 160 kilotons in planetary and solar orbit. Surface and atmospheric operations prohibited.")
# driver.find_element_by_id('licdesencbtn').click()
# driver.find_element_by_id('licdaterand').send_keys("82ce91c52565938ab32469bcdc9f49690969bfd3e91577e5b50e96ae78cf2c64")
# driver.find_element_by_id('licdate').send_keys("2420-08-31")
# driver.find_element_by_id('licdateencbtn').click()
# driver.find_element_by_id('licproofrand').send_keys("3d4f6d24a352ea4df3d5c31931612873a656aabde5280523074dbf493a401de5")
# driver.find_element_by_id('lic-doc').send_keys(folder_location+"Tests/license.txt")
# driver.find_element_by_id('license_pubkey').send_keys(folder_location+"Tests/public_key.txt")
# driver.find_element_by_id('license_pubkey_btn').click()
# driver.find_element_by_id('license_message').send_keys(folder_location+"Tests/license_message.txt")
# driver.find_element_by_id('license_message_btn').click()
# driver.find_element_by_id('license_verify_sig_btn').click()
# driver.find_element_by_id('license_encrypt_sig_btn').click()
# assert driver.find_element_by_id('licensecrypt').text == "b2c34bb9b09d10d2cc3e73140f08686952d5c4249f0f0537fe790f77a9ea1728"
# assert driver.find_element_by_id('licdescrypt').text == "ece671fe0ab00d053440cf96099aeeaef72e2cd8d949c01bad6b3c82fd9466bd"
# assert driver.find_element_by_id('licdatecrypt').text == "e63bb37bb7556c17f4d8839d3d8284129b81becf6796c6b8a33efd31591ed8b8"
# assert driver.find_element_by_id('lic-doc-encrypted').text == "77afb7ba983324361fc7a97a3347767339e9421c11eeea0cdbc812fe2a17c0ed"
# assert driver.find_element_by_id('license_sig_verify_result').text == 'The Signature Has Been Verified'
# print("License encrypted approval: " + driver.find_element_by_id('license_encrypted_approval').text)

# Close the Browser

#driver.quit()
