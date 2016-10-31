#REQUIREMENTS
- npm
- create-react-app

## HOW TO INSTALL NPM (64bit)

1- Download nodejs
```
cd $HOME/Scaricati
wget https://nodejs.org/dist/v6.9.1/node-v6.9.1-linux-x64.tar.xz
```

2- Create folder 'local' into the home and unzip the downloaded .tar.xz
```
mkdir $HOME/local
tar Jxvf $HOME/Scaricati/node-v6.9.1-linux-x64.tar.xz
mv $HOME/Scaricati/node-v6.9.1-linux-x64 $HOME/local
```

3- Edit the file .bashrc and add the following rows
```
export PATH="$PATH:$HOME/local/node-v6.9.1-linux-x64/bin"
export NODE_PATH="$NODE_PATH:$HOME/local/node-v6.9.1-linux-x64/lib/node_modules"
```

## 4onse web site
## HOW TO DEVELOP AND BUILD

```
npm install -g create-react-app
git clone https://github.com/4onse/4onse.github.io.git
cd 4onse.github.io
npm install
```

**Development**
```
npm start
```

**Build the website (only authorized users)**
```
sh ./build.sh
```
**N.B.**
Do not sync the folders **build** and **node_modules** 
