from bs4 import BeautifulSoup
import requests
import sys

url = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%9D%8C%EC%9B%90%EC%B0%A8%ED%8A%B8&oquery=%EB%A9%9C%EB%A1%A0%EC%B0%A8%ED%8A%B8&tqi=UrZ0HsprvN8ssK5ZP%2BsssssstVh-314088"
response = requests.get(url)
if response.status_code != 200:
    print(response.status_code)
    sys.exit()

webpage = response.text
toptenlist = []
artistlist = []
Rank = 10
soup = BeautifulSoup(webpage, 'html.parser')
for topten in soup.select('#main_pack > section.sc_new.sp_pmusic._au_music_collection._prs_mus_sen > div > div.group_music.type_chart > ol > li > div > div.album_info > div > span > a'):
    toptenlist.append(topten.get_text())
for artist in soup.select('#main_pack > section.sc_new.sp_pmusic._au_music_collection._prs_mus_sen > div > div.group_music.type_chart > ol > li > div > div.album_info > div > div > span:nth-child(2) > a'):
    artistlist.append(artist.get_text())

for i in range(Rank):
    print(f'{i + 1}위 : {artistlist[i]} - {toptenlist[i]}')
