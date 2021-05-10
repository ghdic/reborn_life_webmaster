from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import keyboard

url = "https://sanghunhada.com/typingmasterkorea"
driver = webdriver.Chrome('chromedriver')

driver.get(url)
driver.find_element_by_css_selector("#mbti > div.intro > a").click()

span = driver.find_element_by_css_selector("#mbti > div.choice-card > div.typing-input-field > div > span")
input = driver.find_element_by_css_selector("#mbti > div.choice-card > div.typing-input-field > input")

while True:
    text = span.text
    input.clear()
    input.send_keys(text)
    input.send_keys(Keys.ENTER)
    # input.submit()
    if keyboard.is_pressed('q'):  # if key 'q' is pressed
        print('You Pressed q Key!')
        break  # finishing the loop

