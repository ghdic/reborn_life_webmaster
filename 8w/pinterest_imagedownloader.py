import urllib.request
import re
import os
from selenium import webdriver
import keyboard  # using module keyboard

def downloadPinterestImages(link):
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.headless = True
    options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
    global driver
    driver = webdriver.Chrome('chromedriver.exe', options=options)

    driver.set_window_size(1920, 100000)
    print("start")
    driver.get(link)
    print("link start")
    while True: # cpu가 더 이상 일 안하면 0% 되면 q 눌러줌! 이미지 로드 더이상 안하는거임
        if keyboard.is_pressed('q'):  # if key 'q' is pressed
            print('You Pressed q Key!')
            break  # finishing the loop

    images = driver.find_elements_by_css_selector("img")
    print(f"{len(images)}개 사진을 찾았습니다!!")
    if not os.path.exists("image"):
        os.mkdir("image")
    for img in images:
        image_url = img.get_attribute("srcset").split(",")[-1].strip().split(" ")[0]
        print(image_url)
        pattern = re.compile("https://i.pinimg.com/.*")
        if pattern.match(image_url):
            urllib.request.urlretrieve(image_url, "image/"+image_url.split("/")[-1])
    driver.close()
    driver.quit()


if __name__ == "__main__":
    global driver
    try:
        downloadPinterestImages("https://id.pinterest.com/aoisayfa/menhera-chan/")
    except:
        driver.close()
        driver.quit()
