# 解决Mac上AirPods链接断断续续的问题

## 在Mac命令行工具执行
```
defaults write com.apple.BluetoothAudioAgent "Apple Bitpool Max (editable)" 80 
defaults write com.apple.BluetoothAudioAgent "Apple Bitpool Min (editable)" 80 
defaults write com.apple.BluetoothAudioAgent "Apple Initial Bitpool (editable)" 80 
defaults write com.apple.BluetoothAudioAgent "Apple Initial Bitpool Min (editable)" 80 
defaults write com.apple.BluetoothAudioAgent "Negotiated Bitpool" 80 
defaults write com.apple.BluetoothAudioAgent "Negotiated Bitpool Max" 80 
defaults write com.apple.BluetoothAudioAgent "Negotiated Bitpool Min" 80
```

## 执行关闭蓝牙音频相关命令
```
sudo killall bluetoothaudiod
sudo killall coreaudiod
```

## 参考链接
 - [解决MacBookPro用AirPods听歌时声音时断时续问题](https://www.jianshu.com/p/6e4297191ecd)