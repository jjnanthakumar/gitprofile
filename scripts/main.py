import pandas as pd

df = pd.read_excel('src/data/portfolios.xlsx',sheet_name='Experience', dtype={'DateFrom': str,'DateTo':str})
df = df[1:]
df.columns = df.columns.str.lower()
MAPPER = {'role':'position','datefrom':'from','dateto':'to'}

df['datefrom'] = pd.to_datetime(df['datefrom'],errors='ignore')
df['dateto'] = pd.to_datetime(df['dateto'],errors='ignore')

df['datefrom'] = df['datefrom'].dt.strftime('%B %Y')
df['dateto'] = df['dateto'].dt.strftime('%B %Y')
df.rename(columns=MAPPER, inplace=True)
data = df.to_json(orient="records")
print(data)