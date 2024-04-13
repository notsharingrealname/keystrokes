package com.example.eaglercraftmod;

import net.minecraft.client.Minecraft;
import net.minecraft.client.settings.KeyBinding;
import net.minecraftforge.client.settings.KeyConflictContext;
import net.minecraftforge.fml.client.registry.ClientRegistry;
import net.minecraftforge.fml.common.Mod;
import net.minecraftforge.fml.common.Mod.EventHandler;
import net.minecraftforge.fml.common.event.FMLInitializationEvent;

@Mod(modid = "eaglercraftmod", name = "Eaglercraft Keystrokes Mod", version = "1.0")
public class EaglercraftMod {
    private static final String MOD_ID = "eaglercraftmod";
    private static final String MOD_NAME = "Eaglercraft Keystrokes Mod";
    private static final String MOD_VERSION = "1.0";

    public static KeyBinding keyBinding;

    @EventHandler
    public void init(FMLInitializationEvent event) {
        keyBinding = new KeyBinding("Eaglercraft Keystroke", KeyConflictContext.IN_GAME, Minecraft.getInstance().gameSettings.keyBindForward.getKeyCode(), MOD_NAME);
        ClientRegistry.registerKeyBinding(keyBinding);
    }
}
