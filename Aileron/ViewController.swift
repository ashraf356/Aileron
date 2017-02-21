//
//  ViewController.swift
//  Aileron
//
//  Created by Ashraf Omar on 21/12/16.
//  Copyright (c) 2016 Ashraf Omar. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        
        let localfilePath = NSBundle.mainBundle().URLForResource("index", withExtension: "html");
        println(localfilePath)
        let URLRequest = NSURLRequest(URL: localfilePath!);
        
        let webView:UIWebView = UIWebView(frame: CGRectMake(0, 0, UIScreen.mainScreen().bounds.width, UIScreen.mainScreen().bounds.height))
        webView.loadRequest(URLRequest)
        //webView.loadRequest(NSURLRequest(URL: NSURL(string: "http://localhost/Alieron/index.html")!))
        
        //webView.scrollView.scrollEnabled = false
        webView.scrollView.bounces = false
        self.view.addSubview(webView)
        
    }
    
    override func viewWillAppear(animated: Bool) {
        super.viewWillAppear(true)
        navigationController?.navigationBar.hidden = true // for navigation bar hide
        UIApplication.sharedApplication().statusBarHidden=true; // for status bar hide
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func prefersStatusBarHidden() -> Bool {
        return true
    }


}

