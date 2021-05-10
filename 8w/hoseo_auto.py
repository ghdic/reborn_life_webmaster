from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
import os, time

# 탭에 크롤링할 대상 리소스가 로드 될때까지 기다려준다
def waitSession(val, tt):
    global driver
    try:
        element = WebDriverWait(driver, tt).until(
            EC.presence_of_element_located((By.CSS_SELECTOR, val))
        )
    except TimeoutException:
        print("타임아웃")
        raise Exception('타임아웃')

def getNodeText(e):
    """ 자식 노드의 텍스트를 제외한 텍스트를 반환 """
    text = e.text.strip()
    childs = e.find_elements_by_css_selector("*")
    for child in childs:
        text = text.replace(child.text, "").strip()
    return text


def auto_play():
    driver = webdriver.Chrome('chromedriver')
    driver.get("https://learn.hoseo.ac.kr/login.php")

    id = driver.find_element_by_css_selector("#username")
    pw = driver.find_element_by_css_selector("#password")
    login_btn = driver.find_element_by_css_selector("#region-main > div > div > div.main_login_bg > div.main_login_bar > div.main_login_box.login_form > form > div:nth-child(3) > button")
    id.send_keys("20161607")
    pw.send_keys(os.environ.get("my_pw"))
    login_btn.click()

    lesson = driver.find_element_by_css_selector("#region-main > div > div.progress_courses > div.course_lists > ul")

    lesson_url_list = lesson.find_elements_by_css_selector("li > div > a")
    for e in lesson_url_list:
        title = e.find_element_by_css_selector("div.course-name > div.course-title > h3").text
        print(title)
        if title == "학생용 온라인 폭력예방":
            url = e.get_attribute("href")
            driver.get(url)
            break

    lectures = driver.find_elements_by_css_selector("#region-main > div > div > div.total_sections > div > ul > li")
    for lecture in lectures:
        courses = lecture.find_elements_by_css_selector("div.content > ul > li")
        for course in courses:
            # 추가 1
            img = course.find_element_by_css_selector("div > div > div:nth-child(2) > div > span.actions > span > img")
            if img.get_attribute("src") != "https://learn.hoseo.ac.kr/theme/image.php/coursemosv2/core/1620378148/i/completion-auto-n":
                continue

            title = getNodeText(course.find_element_by_css_selector("div > div > div:nth-child(2) > div > a > span"))
            url = course.find_element_by_css_selector("div > div > div:nth-child(2) > div > a").click()

            print(title)
            cur_tab = driver.current_window_handle
            driver.switch_to.window(driver.window_handles[-1])

            # 추가 2
            try:
                confirm = driver.switch_to.alert
                confirm.accept()
            except:
                pass

            driver.find_element_by_css_selector("#vod_player > div.jw-media.jw-reset > video").click()
            time.sleep(5)
            count_down = driver.find_element_by_css_selector("#vod_player > div.jw-controls.jw-reset > div.jw-controlbar.jw-background-color.jw-reset > div.jw-group.jw-controlbar-left-group.jw-reset > span.jw-text.jw-reset.jw-text-countdown")
            while True:
                print(count_down.get_attribute('textContent'))
                if count_down.get_attribute('textContent') == "00:00":
                    break
                time.sleep(1)
            driver.close()
            driver.switch_to.window(cur_tab)



auto_play()
