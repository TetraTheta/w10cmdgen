@echo off
cls
echo [101;93m STYLES [0m
echo [0mReset[0m
echo [1mBold[0m
echo [4mUnderline[0m
echo [7mInverse[0m
echo.
echo [101;93m NORMAL FOREGROUND COLORS [0m    [101;93m STRONG FOREGROUND COLORS [0m    [101;93m NORMAL BACKGROUND COLORS [0m    [101;93m STRONG BACKGROUND COLORS [0m
echo [30mBlack[0m (black)                     [90mGrey[0m                              [40mBlack[0m                             [100mBlack[0m
echo [31mRed[0m                               [91mRed[0m                               [41mRed[0m                               [101mRed[0m
echo [32mGreen[0m                             [92mGreen[0m                             [42mGreen[0m                             [102mGreen[0m
echo [33mYellow[0m                            [93mYellow[0m                            [43mYellow[0m                            [103mYellow[0m
echo [34mBlue[0m                              [94mBlue[0m                              [44mBlue[0m                              [104mBlue[0m
echo [35mMagenta[0m                           [95mMagenta[0m                           [45mMagenta[0m                           [105mMagenta[0m
echo [36mCyan[0m                              [96mCyan[0m                              [46mCyan[0m                              [106mCyan[0m
echo [37mWhite[0m                             [97mWhite[0m                             [47mWhite[0m (white)                     [107mWhite[0m
pause
cls
:: Testing - Not using ; - SUCCESS
echo [41m[95mTEST[0m
:: Testing - Using '\u001B' instead of  - FAILED
echo \u001B[41m\u001B[95mTEST[0m
:: Testing - Using '\x1b' instead of  - FAILED
echo \x1b[31mTEST[0m
pause